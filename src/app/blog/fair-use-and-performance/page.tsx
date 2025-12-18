import Image from "next/image"
import type { Metadata } from "next";

export default function Details() {
    return (
        <div className="flex flex-col gap-y-12 py-8 px-4 max-w-5xl mx-auto">
            <div className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-4xl font-light leading-16 tracking-tight text-gray-900">
                    Fair use and performance: A Lesson from real-world engineering
                </p>
                <p className="mt-4 text-gray-500 max-w-5/6 mx-auto">
                    As a high school senior, I built a webscraping API for a personal project and later open sourced it. Four years later, I still maintain the API, and it continues to teach me lessons about serving real users in production.
                </p>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                    src={'/blog/fair-use-and-performance/hero-tile.png'}
                    alt={'Hero Image'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority
                />
            </div>

            <div className="space-y-4 leading-loose">
                <p className="text-xl font-semibold">Overview</p>

                <p>When I was a high school senior, I helped build Gradual, a mobile app designed to make academic information more accessible for students. We focused on building a clean, intuitive interface that let students get what they needed quickly and effortlessly. One of my responsibilities was to build the API that scraped data from the students’ online portal and transformed it into a format that the app could consume.</p>

                <p>Following the success of our app, we decided to open-source the API to empower other students to experiment, learn and build their own tools. Four years later, I still maintain the API, and it continues to teach me lessons that only come from serving real users in production.</p>

                <p>At its core, this API exists to provide a single, consistent way to retrieve data in a format that’s easy to work with. Over the years, students have used the API to build grade trackers, notification systems, analytics tools, and learning projects.</p>

                <Image
                    src="/blog/fair-use-and-performance/docs-site.png"
                    alt="API Documentation Site"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 w-full h-auto"
                />

                <p>Behind the scenes, the API simply does what a student would normally do by hand. It signs into the student portal on the user’s behalf, visits the relevant pages for grades, attendance, or transcripts, and then extracts the information that matters. That data is cleaned up and returned in a structured format so apps and tools can use it directly.</p>

                <p>Because the API was originally built for a single use case, many of the early design decisions were driven by the needs of our app rather than by general-purpose considerations.</p>

                <p>Performance was “good enough,” and usage patterns were predictable. Our app was often the primary client, and when issues came up, we could diagnose and fix them quickly. There was no need to think deeply about misuse, abuse, or scale. If something broke, it broke for us.</p>

                <p>That changed once the API began to see wider adoption.</p>

                <p>As more students started building on top of it, the API stopped being a personal tool and slowly became shared infrastructure. People used it in ways I hadn’t anticipated: automated polling, background jobs, dashboards that refreshed every few seconds. None of this was malicious, it was the natural outcome of real users with diverse needs interacting with a system in the wild.</p>

                <p>Earlier this month, that shift became impossible to ignore. The API received over <span className="font-bold text-red-500">870,000 requests in a single day</span>, quickly exceeding its usage limits and pushing the system well beyond what it was originally designed to handle.</p>

                <Image
                    src="/blog/fair-use-and-performance/vercel_edge_requests.png"
                    alt="Vercel edge requests over use"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 "
                />

                <p>This incident forced me to confront a hard truth: building a tool that works well for myself or a single use case is fundamentally different from building one that real people rely on. In the wild, performance and fair use matter, and are core responsibilities that shape user experiences.</p>
            </div>

            <div className="space-y-2 leading-loose">
                <p className="text-xl font-semibold">Fair Use as a First-Class Constraint</p>

                <p>Students weren’t intentionally abusing the API, but many were building systems that behaved very differently from a human user. Background jobs ran on short intervals. Dashboards refreshed aggressively. Scripts retried automatically on failure. Each of these made sense in isolation, but together they created a level of load the API, and the upstream student portal, was never meant to sustain.</p>

                <p>At that point, “fair use” stopped being a policy question and became an engineering one. Documentation alone couldn’t solve the problem. The system itself needed a way to enforce reasonable boundaries.</p>

                <p>My first instinct was to tackle the most visible problem: short, sudden traffic spikes caused by infinite loops, accidental refreshes, or misbehaving clients. Fortunately, my serverless host, Vercel, provides a flexible Web Application Firewall (WAF) with built-in rate limiting.</p>

                <Image
                    src="/blog/fair-use-and-performance/vercel_rate_limiter.png"
                    alt="Vercel WAF Rate Limiter Configuration"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 w-full h-auto"
                />

                <p>I set up the WAF and configured its rate limiter to prevent short burst traffic spikes. This worked well for blocking sudden, spiky traffic, but because the built-in rate limiter only operates within windows of up to five minutes, I needed to build my own solution to enforce longer-term limits.</p>

                <p>Daily limits turned out to be an important design choice. Student usage tends to be bursty but cyclical, such as checking grades after an exam, building a project over a weekend, or experimenting during a class.</p>

                <p>To enforce longer-term limits, I built a middleware layer that captures the incoming request’s IP address and uses Redis as a centralized store to track usage across all serverless invocations. Each request increments a counter associated with that IP, with a time-to-live set to a 24-hour window.</p>

                <p>API users are allowed up to 1,000 requests per day. Once that limit is reached, the middleware blocks further requests. After 24 hours, the counter automatically resets, allowing the IP to make requests again.</p>

                <Image
                    src="/blog/fair-use-and-performance/redis_rate_limit.png"
                    alt="Redis rate limiter"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>Because Redis operations are fast and atomic, this check adds minimal overhead while remaining accurate under concurrency. Additionally, it works within the constraints of a stateless serverless architecture which my API is built on, every function invocation can consult the same shared source of truth without coordinating with other instances.</p>
            </div>

            <div className="space-y-2 leading-loose">
                <p className="text-xl font-semibold">Performance optimizations with Redis</p>

                <p>Even after introducing rate limiting, it became clear that the API was still doing far more work than necessary on each request. This led to long serverless execution times, often exceeding what my free tier usage limits allowed.</p>

                <Image
                    src="/blog/fair-use-and-performance/vercel_function_duration.png"
                    alt="Vercel function duration overuse"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>This wasn’t immediately obvious during development, but under real traffic it became one of the dominant contributors to latency and upstream load.</p>

                <p>The root cause was authentication.</p>

                <p>Because the API interacts with a third-party student portal, each request originally followed the same sequence of steps: submit credentials, pass through the login flow, retrieve a fresh set of session cookies, and only then request the page containing grades, attendance, or transcripts.</p>

                <p>In real world use, users often requested multiple API routes (such as /attendance and /currentclasses) to fetch all the data they needed. In a serverless environment, each request is treated as an isolated event and there is no guarantee two consecutive requests will be handled by the same underlying instance, or that any state from a previous request will still exist.</p>

                <p>As a result, every incoming request had to start from scratch. Before the API could fetch any meaningful data, it first needed to authenticate with the downstream portal and establish a valid session. Only after completing that full round trip could it make a second request to retrieve and scrape the actual academic information. When this process is repeated across multiple API routes, the cost adds up quickly.</p>

                <p>To solve this, I expanded the Redis store to store authenticated session credentials for a short, controlled period of time.</p>

                <Image
                    src="/blog/fair-use-and-performance/redis_session_cookies.png"
                    alt="Redis session cookie storage"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>When a request arrives, the API now checks Redis for an existing session associated with the client. If a valid session is found, the API reuses the stored cookies and skips the login flow entirely. If no session exists, or if the cached session has expired, the API performs a fresh login, retrieves new credentials, and stores them back in Redis with a defined time-to-live.</p>

                <Image
                    src="/blog/fair-use-and-performance/redis_caching_diagram.png"
                    alt="Updated request response diagram"
                    width={600}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>This design preserves the stateless nature of the serverless functions while allowing the system as a whole to behave statefully.</p>

                <p>By eliminating the need to authenticate on every request, the amortized response time improved dramatically. Before introducing session caching, a full API round trip often took several seconds due to repeated login and navigation flows. After caching authenticated sessions in Redis, the same requests consistently completed in under <span className="font-bold text-green-500">300 ms</span>.</p>

                <p>This change also made the API more resilient. During traffic spikes, fewer authentication requests meant less load on the downstream server. The API spent more time doing useful work and less time repeating setup steps that had already been completed moments earlier.</p>
            </div>

            <div className="space-y-2 leading-loose">
                <p className="text-xl font-semibold">Building For Users</p>

                <p>For a long time, this API existed in a comfortable space where if a request returned the right data, the system was considered successful. That definition held up while usage was small and predictable, but it didn’t survive exposure to real traffic and real user behavior.</p>

                <p>What stood out most was how little of this could have been anticipated in isolation. None of these issues appeared during development, and none would have surfaced without real users interacting with the API in ways I hadn’t planned for.</p>

                <p>In the end, the most meaningful part of this project wasn’t the technology stack or the optimizations themselves, but the shift in perspective they forced.</p>

                <p>There’s a unique satisfaction in addressing issues that matter outside of a development environment. Each iteration sharpens both the system and my own understanding of what it means to engineer software in production.</p>

                <p>The API is publicly available <a className="text-blue-500 underline" target="_blank" href="https://friscoisdhacapi.vercel.app/">here</a> and the source code is open-source on Github <a className="text-blue-500 underline" href="https://github.com/SumitNalavade/FriscoISDHACAPI" target="_blank">here</a>.</p>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
  title: "Fair use and performance: A lesson from real-world engineering",
  description:
    "As a high school senior, I built a webscraping API for a personal project and later open sourced it. Four years later, I still maintain the API, and it continues to teach me lessons about serving real users in production.",
  openGraph: {
    title: "Fair use and performance: A lesson from real-world engineering",
    description:
      "As a high school senior, I built a webscraping API for a personal project and later open sourced it. Four years later, I still maintain the API, and it continues to teach me lessons about serving real users in production.",
    url: "https://sumitnalavade.com/blog/fair-use-and-performance",
    siteName: "Sumit Nalavade",
    images: [
      {
        url: "https://sumitnalavade.com/blog/fair-use-and-performance/hero-tile.png",
        width: 1200,
        height: 630,
        alt: "Fair use and performance",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fair use and performance: A lesson from real-world engineering",
    description:
      "As a high school senior, I built a webscraping API for a personal project and later open sourced it. Four years later, I still maintain the API, and it continues to teach me lessons about serving real users in production.",
    images: ["https://sumitnalavade.com/blog/fair-use-and-performance/hero-tile.png"],
  },
};