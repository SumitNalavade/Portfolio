import Image from "next/image"

export default function Details() {
    return (
        <div className="flex flex-col gap-y-12 py-8 px-4">
            <div className="text-center">
                <p className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
                    Gradual Grades
                </p>
                <p className="mt-4 text-gray-500">
                    Mobile app to track students' grades
                </p>
            </div>

            <div className="flex justify-center items-center bg-gradient-to-br from-[#E3D9F9] via-[#E8CFF2] to-[#C7E5FA] rounded-2xl h-[300px] sm:h-[400px] lg:h-[500px] p-4 lg:p-6">
                <Image
                    src="/work/gradual/banner_image.png"
                    alt="Gradual Thumbnail"
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Overview</p>

                <p>Gradual Grades is a mobile app I built to help students conveniently access their academic information on the go. I developed it during my senior year of high school for students in the Frisco Independent School District (Frisco ISD). The goal was to create an easier, faster, and more intuitive way for students to check their grades and stay on top of their academic progress.</p>

                <Image
                    src="/work/gradual/gradual_screenshot.png"
                    alt="Gradual app screenshot"
                    width={500}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>The app was released on both iOS and Android, along with a public, open-source API that allowed other students and developers to build similar tools. The project turned out to be a major success, reaching thousands of downloads across both platforms and earning excellent reviews from users. Even today, the API continues to be used by multiple third-party apps, providing a reliable and accessible way for developers to retrieve academic data and build creative solutions for students.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Background</p>

                <p>Grades play an important role in a student's academic life, so being able to access them quickly and easily is essential. For Frisco ISD students, however, checking grades and other academic information wasn't simple as they had to log into the district's online portal, authenticate with their credentials, and navigate through several tabs just to find the information they needed.</p>

                <Image
                    src="/work/gradual/hac_screenshot.png"
                    alt="HAC screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>This extra friction made it inconvenient for students to stay on top of their academic progress, which inspired me to create a faster and more intuitive solution. I wanted to build a mobile app that lived directly on students' phones, allowing them to access their grades and academic information instantly, with just the tap of a button.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">API Development</p>

                <p>The first step in building Gradual Grades was developing the data source. I wanted to create an independent REST API that could later be accessed by any client application. The API would accept a student's credentials, scrape the academic data from the district's portal, and then return the results in a clean, structured JSON format.</p>

                <p>Each request begins by passing the student's username and password as query parameters. These credentials are used to establish a session.</p>

                <ul className="space-y-1 py-4">
                    <p>Once logged in, the API sends a request to the appropriate HAC endpoint — for example:</p>
                    <li className="pl-4">/Assignments → Returns current courses and assignments</li>
                    <li className="pl-4">/pastAssignments → Provides the current class schedule</li>
                    <li className="pl-4">/schedule → Provides the current class schedule</li>
                    <li className="pl-4">/transcript → Returns GPA, class rank, and cumulative transcript history</li>
                </ul>

                <p>
                    Using BeautifulSoup with the lxml parser, the raw HTML pages are parsed and cleaned to extract structured data such as course names, assignment scores, due dates, teachers, buildings, and GPA values.
                </p>

                <Image
                    src="/work/gradual/api_site_screenshot.png"
                    alt="HAC screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <Image
                    src="/work/gradual/api_site_screenshot_2.png"
                    alt="HAC screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Additionally, I built an interactive documentation website to help other developers understand how to use the API. I decided to open-source the project because I knew that after I graduated, it would be difficult for me to continue maintaining the mobile app, but I still wanted students and developers to have a way to access academic data programmatically.</p>

                <p>The documentation site provides a clear overview of all available routes, along with the expected request parameters and JSON responses for each endpoint. To make it even more developer-friendly, I included an interactive API explorer, allowing users to input their credentials, query the endpoints directly, and see real-time responses from the API. This made onboarding for new developers simple and encouraged others to build their own apps and tools on top of the system.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">App Development</p>

                <p>Soon after the API was developed and hosted, I began working on the mobile app itself. Since I was operating on a tight timeline and working with a small development team — just myself and another student — we decided to build the app using React Native, a cross-platform framework that allowed us to deploy to both iOS and Android from a single codebase. This decision helped us move quickly while maintaining a consistent user experience across devices, making Gradual Grades accessible to as many students as possible.</p>

                <p>Development was smooth sailing as we didn't encounter any major issues with the frameworks. Using React Native and Expo gave us access to many ready-to-use components that worked well right out of the box. Our app design evolved organically throughout the development process as we refined the interface based on usability and feedback from early testers.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Launch + Reception</p>

                <p>We launched the app during the spring semester of the school year and received an overwhelmingly positive response from students. They appreciated the convenience of being able to check their grades instantly and loved the extra features we added, such as real-time GPA calculations and a "what-if" grade calculator that let them see how upcoming assignments could impact their overall scores.</p>

                <p>We also received helpful feedback from students who suggested ways to improve the app's design and make a few minor user experience (UX) enhancements. These insights were invaluable, helping us identify small tweaks that could make the app even more intuitive and enjoyable to use.</p>

                <Image
                    src="/work/gradual/gradual_yearbook_quote.png"
                    alt="HAC screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Ongoing Support</p>

                <p>While I haven't been able to actively maintain the Gradual Grades app since graduating from high school, I've continued to support and update the API. Over time, this API has become the foundation for many other student-built apps, enabling developers across the district to create their own tools similar to Gradual Grades.</p>

                <Image
                    src="/work/gradual/gradual_usage_screenshot.png"
                    alt="HAC screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Today, the service continues to handle thousands of requests each month and powers multiple apps that are still actively used by students.</p>
            </div>
        </div>
    )
}