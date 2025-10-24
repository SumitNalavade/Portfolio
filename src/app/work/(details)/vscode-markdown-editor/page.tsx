import Image from "next/image"

export default function Details() {
    return (
        <div className="flex flex-col gap-y-12 py-8 px-4">
            <div className="text-center">
                <p className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
                    VSCode Markdown Editor
                </p>
                <p className="mt-4 text-gray-500">
                    Building a markdown editor extension for VSCode
                </p>
            </div>

            <div className="flex justify-center items-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl h-[300px] sm:h-[400px] lg:h-[500px] p-4 lg:p-6">
                <Image
                    src="/work/vscode/banner_image.png"
                    alt="VSCode Thumbnail"
                    width={250}
                    height={300}
                    className="object-contain"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Overview</p>

                <p>I built an interactive Markdown editor extension for VS Code that allows developers to quickly create or edit README files and other Markdown documents directly within the editor. The extension provides a live preview, syntax highlighting, and instant formatting.</p>

                <Image
                    src="/work/vscode/markdown_editor_screenshot.png"
                    alt="VSCode Markdown Editor Screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>This project was a huge success, with the extension now reaching over 40,000 downloads on the Visual Studio Code Marketplace. Developers appreciated its intuitive interface and real-time Markdown preview, which made writing and editing README files much faster and more enjoyable. Seeing the community adopt and support the project has been one of the most rewarding parts of my development journey.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Background</p>

                <p>For most of my projects, I like to create a README file explaining what the project is about, how it works, and how other developers can get started with it.</p>

                <p>To create these files, I often use a popular online tool called ReadMe.so, which provides a suite of helpful features like pre-made components, live previews, and templates that make writing README files much easier. I really liked how simple and intuitive it was to use.</p>

                <Image
                    src="/work/vscode/readme_so_screenshot.png"
                    alt="ReadMe.so screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>This served as the inspiration for my project, I wanted to bring this experience inside VSCode by creating an extension that allows developers to create and edit existing markdown files without having to leave their editor.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Development</p>

                <p>There are several ways to create extensions inside VS Code. The traditional approach is to develop them using the native VS Code Extension API (SDK), which allows you to build extensions that run directly on Node.js.</p>

                <p>An alternative approach is to use the VS Code Webview API, which allows developers to create customizable views inside VS Code panels using familiar web technologies like HTML, CSS, and JavaScript.</p>

                <p>Extending this functionality even further, developers can create an entire web application using modern frontend frameworks and then bundle it as a Single-Page Application (SPA). The Webview API can then render this SPA directly inside VS Code, essentially turning the editor into a lightweight host for a full web experience. </p>

                <p>This was the approach I decided to take. I used React.js to build a complete Single-Page Application (SPA), which I then bundled and rendered inside a VS Code panel using the Webview API. This setup allowed me to combine the power of React's component-based architecture with the flexibility of VS Code's extension system.</p>

                <Image
                    src="/work/vscode/webview_api_screenshot.png"
                    alt="VSCode Webview API Screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Reception</p>

                <p>After developing and testing the extension locally, I published it to the VS Code Marketplace for the public. To my surprise, it quickly gained traction, reaching thousands of downloads within a short period and earning consistent five-star reviews from developers who found it helpful for creating and editing Markdown files directly within VS Code.</p>

                <p>Today, the extension continues to maintain its five-star rating with over 40,000 downloads on the VS Code Marketplace.</p>
            </div>
        </div>
    )
}