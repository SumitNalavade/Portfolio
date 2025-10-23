import Image from "next/image"

export default function Details() {
    return (
        <div className="flex flex-col gap-y-12 py-8">
            <div className="text-center">
                <p className="text-6xl font-light tracking-tight text-gray-900">
                    Card Benefits @ Chase
                </p>
                <p className="mt-4 text-gray-500">
                    2026 Chase Software Engineering Program Experience
                </p>
            </div>

            <div className="flex justify-center items-center bg-gradient-to-br from-yellow-100 via-blue-100 to-cyan-100 rounded-2xl h-[500px] p-6">
                <Image
                    src="/work/jpmc/banner_image.png"
                    alt="Chase Thumbnail"
                    width={600}
                    height={300}
                    className="object-contain"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Overview</p>

                <p>I interned at JPMorgan Chase in the Software Engineer Program (SEP) during the summer of 2024, where I worked within the Consumer & Community Banking (CCB) organization on the Benefits team. During my internship, I took on diverse responsibilities, gaining valuable technical experience and strengthening my professional skills across multiple areas of software development.</p>

                <p>Consumer & Community Banking (CCB) serves individual customers and small businesses through a wide range of financial products and channels, including branches, digital platforms, credit cards, mortgages, auto loans, and more. Within CCB, the Benefits team delivers seamless, high-impact experiences across mobile and web platforms, helping customers easily access, understand, and maximize the benefits available to them.</p>

                <Image
                    src="/work/jpmc/chase_app_and_website.png"
                    alt="Chase app and website thumbnail"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>The highlight of my summer was seeing my work go live on the Chase mobile app and website, reaching millions of users nationwide. Equally meaningful was the opportunity to build lasting relationships with fellow interns and full-time associates, whose mentorship and collaboration made the experience both rewarding and memorable.</p>

                <p>I had the opportunity to contribute to both platforms, developing features that enhanced how customers discover and engage with their benefits. My projects spanned the full agile development lifecycle, from design to deployment and were successfully released to production, directly improving the digital experience for millions of Chase users.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Android Development</p>

                <p>The majority of my work centered on Android development for the Benefits products, where I contributed to building and refining user-facing features within the Chase mobile app. I worked primarily with Kotlin and Java as well as Jetpack Compose and other modern Android frameworks.</p>

                <p>This was a learning experience for me as it was my first time developing native mobile apps. While I had previously built cross-platform apps using React Native, working with Android’s native stack allowed me to deepen my understanding of mobile architecture, UI frameworks, and performance optimization on a platform-specific level.</p>

                <Image
                    src="/work/jpmc/chase_android_tech_stack.png"
                    alt="Chase Android Tech Stack"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>I began by working on apps that used XML-based layouts to understand the foundations of Android UI design and view hierarchies. As I grew more comfortable with the development environment and architecture, I transitioned to Jetpack Compose, where I explored modern declarative UI patterns and contributed to building cleaner, more scalable interfaces.</p>

                <p>I began by working on apps that used XML-based layouts to understand the foundations of Android UI design and view hierarchies. As I grew more comfortable with the development environment and architecture, I transitioned to Jetpack Compose, where I explored modern declarative UI patterns and contributed to building cleaner, more scalable interfaces.</p>

                <Image
                    src="/work/jpmc/chase_app_screenshots.png"
                    alt="Chase App Screenshots"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>After some practice and mentorship from associates on my team, I was able to hit the ground running, contributing to agile stories that directly impacted the customer experience. I participated in code reviews, sprint planning, and feature development, gaining hands-on exposure to how large-scale production systems are built and maintained within a collaborative engineering environment.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Web Development</p>

                <p>In addition to my work on the Android app, I also had the opportunity to contribute to web development for the Chase.com platform. Similar to mobile, I worked on Benefits products within the web ecosystem, enhancing the user interface and functionality to ensure a consistent and seamless experience across both mobile and desktop environments.</p>

                <Image
                    src="/work/jpmc/chase_web_app.png"
                    alt="Chase Web App"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <Image
                    src="/work/jpmc/chase_travel_site.png"
                    alt="Chase travel site"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>On the web team, I worked primarily with TypeScript and React, developing reusable components and implementing new features. This experience helped me strengthen my understanding of frontend architecture, state management, and responsive design, while contributing to a unified user experience across platforms.</p>

                <p>In addition, I used Jest to build unit and integration tests, ensuring code reliability and maintaining high test coverage across components. This experience deepened my appreciation for test-driven development and the importance of building scalable, maintainable code in a large production environment.</p>
            </div>
        </div>
    )
}