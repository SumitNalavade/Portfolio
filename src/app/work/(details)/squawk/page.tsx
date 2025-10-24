import Image from "next/image"

export default function Details() {
    return (
        <div className="flex flex-col gap-y-12 py-8 px-4">
            <div className="text-center">
                <p className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
                    Squawk
                </p>
                <p className="mt-4 text-gray-500">
                    Building an AI platform for educators
                </p>
            </div>

            <div className="flex justify-center items-center bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 rounded-2xl h-[300px] sm:h-[400px] lg:h-[500px] p-4 lg:p-6">
                <Image
                    src="/work/squawk/banner_image.png"
                    alt="Squawk Thumbnail"
                    width={600}
                    height={600}
                    className="object-contain w-[260px] sm:w-[350px] lg:w-[600px] h-auto max-w-full max-h-full"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Overview</p>

                <p>Squawk is a platform that empowers educators to create personalized AI teaching assistants trained on their own course materials. It provides an intuitive set of tools that make it easy to build, customize, and deploy AI agents directly to classroom websites or learning platforms. With Squawk, educators can give students a smarter, more interactive way to engage with course content — answering questions, clarifying concepts, and supporting learning around the clock.</p>

                <Image
                    src="/work/squawk/squawk_homepage.png"
                    alt="Squawk Homepage"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Based on my own experience as a teaching assistant (TA) for an undergraduate Python programming course, I saw firsthand how students often struggled with AI-generated answers when studying or seeking help with assignments. Many of these responses, while technically correct, didn't match the terminology, structure, or expectations used in class — leaving students more confused than before. This gap between what AI tools provide and what instructors actually teach inspired me to build Squawk, a system that keeps learning grounded in the educator's own materials.</p>

                <Image
                    src="/work/squawk/squawk_document_view.png"
                    alt="Squawk Document View"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Squawk was designed to prioritize answers grounded in the educator's uploaded content. Many students face a common issue when using general AI tools — the responses they receive often don't align with what was taught in class. By focusing on course-specific materials, Squawk ensures that every answer reflects the instructor's curriculum, readings, and lectures, helping students learn in context and stay consistent with what's actually being assessed.</p>

                <Image
                    src="/work/squawk/squawk_embed_view.png"
                    alt="Squawk Embed View"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <Image
                    src="/work/squawk/squawk_canvas_view.png"
                    alt="Squawk Canvas View"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Additionally, Squawk can be embedded directly into websites and apps through simple iFrame integration. This makes it easy for educators to add their AI assistant to existing platforms such as course pages, learning management systems, or department websites without any complex setup.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">HackTX</p>

                <p>Squawk began as a project for HackTX, an annual hackathon hosted at The University of Texas at Austin. The theme for the 2024 event was AI, and naturally, many teams gravitated toward building chatbots from the ground up — complete with their own APIs, databases, and infrastructure — before delivering them to end users.</p>

                <p>We wanted to take a different approach. Rather than being just another RAG chatbot, we focused on the end-user experience. Most people who want to integrate AI into their websites or apps don't want to deal with technical setup or maintenance — they simply want something that works. Many educators, creators, and small teams don't have the resources to manage infrastructure, scale databases, or maintain engineering support. They need a simple, plug-and-play solution that abstracts away all the complexity so they can focus on what truly matters: their content and their audience.</p>

                <p>To explain our idea, I often used the YouTube analogy. When someone wants to host a video on their website, they don't build their own video server — they upload it to YouTube and embed it via an iFrame. We envisioned Squawk the same way: users upload their educational content to our platform, we handle all the AI processing, indexing, and retrieval, and in return, they get a single embeddable link to integrate their personalized AI assistant anywhere.</p>

                <Image
                    src="/work/squawk/training_wheels_homepage.png"
                    alt="Training Wheels Homepage"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <Image
                    src="/work/squawk/training_wheels_dashboard.png"
                    alt="Training Wheels Dashboard"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Originally our project was called Training Wheels and although we didn't win the hackathon, this project would prove to be the foundation of what would later be Squawk.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Resurgence</p>

                <p>A few months passed before we made any real progress on the Training Wheels project. Although I saw potential for it to expand into real-world educational use cases, the demands of school kept me busy through the semester.</p>

                <p>Then, during the summer of 2025, rumors started circulating about a new "study mode" for ChatGPT. This immediately caught my attention — education had been one of our original demo use cases for Training Wheels at HackTX, and it felt like OpenAI was beginning to explore the same space we had envisioned.</p>

                <Image
                    src="/work/squawk/twitter_1.png"
                    alt="Twitter Screenshot"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <Image
                    src="/work/squawk/twitter_2.png"
                    alt="Twitter Screenshot"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>While ChatGPT's study mode seemed like a great step forward for students, it still came with some friction — users had to manually download and upload their course materials, then prompt ChatGPT for answers. It wasn't a seamless experience, especially for students who just wanted quick, relevant help.</p>

                <p>That's when I started thinking back to our Training Wheels project. What if we could combine the intelligence of study mode with the simplicity and convenience of our platform? Instead of students doing the setup themselves, educators could upload materials once, and students could interact with an AI assistant that already knew the course content — all embedded directly into their class websites.</p>

                <p>While the idea made sense in my head, I still wanted to validate it with real end users before moving forward. That summer, I set up a series of meetings with professors at Texas A&M University to understand whether this kind of platform could actually be adopted in their classrooms.</p>

                <p>The feedback was overwhelmingly positive. Many professors were excited about the idea of integrating AI into their teaching, seeing it as a way to help students engage more deeply with course materials. They especially liked the idea of an assistant that could answer questions using only their own content, ensuring accuracy and consistency with what was being taught in class.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Development</p>

                <p>Later that summer, I began designing and developing the Squawk platform, building on the foundation of our earlier Training Wheels project. My goal was to create a system that was both simple and reliable — something educators could use in real-world classrooms without needing any technical background. Every design decision focused on ease of use and stability, ensuring that instructors could upload their materials, deploy their AI assistants, and trust that the platform would handle everything behind the scenes.</p>

                <p>The project was built using a stack of familiar and reliable technologies — React and Next.js (with TypeScript) for the frontend, and Python with FastAPI for the backend services that handled file uploads and chat interactions. This combination allowed us to move quickly while keeping the codebase clean, scalable, and easy to maintain.</p>

                <p>Additionally, we used LangChain, a popular framework for building LLM-powered applications. It provided the tools needed to manage our retrieval-augmented generation (RAG) pipeline</p>

                <Image
                    src="/work/squawk/squawk_tech_stack.png"
                    alt="Squawk Tech Stack"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Users would start by creating a "project" in the Squawk web interface, where they could upload materials such as syllabi, lecture notes, and slides. These files were then sent to the upload service, which handled all the heavy lifting behind the scenes.</p>

                <p>The upload service would chunk the content into smaller, meaningful sections before generating vector embeddings for each chunk using our LLM pipeline</p>

                <p>When students asked questions, the chat service would first convert their prompt into a vector representation and then search the database for the most similar embeddings. Once matching vectors were found, the system would retrieve the corresponding content chunks from the database. These chunks, which contained the most relevant sections of the uploaded materials, were then passed to the LLM along with the student's original query. The model used this context to generate a complete, course-specific response, ensuring that the answer aligned with what was actually taught in class.</p>

                <Image
                    src="/work/squawk/rag_diagram.png"
                    alt="RAG Diagram"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Launch</p>

                <p>For our initial launch, I decided to keep things limited — I wanted to observe how the system performed in a real classroom environment and make adjustments based on feedback from actual users. I partnered with a professor I had previously worked with as a TA, Dr. Tanya Wickliff, to bring Squawk into her course, an introductory Python programming class primarily for freshmen.</p>

                <p>It felt like the perfect place to start. Many students enter college with little to no prior programming experience, and learning to code can feel like learning a new language. These students often turn to AI tools for help, but the responses they get are sometimes too advanced, inconsistent, or detached from how the material is taught in class. Squawk aimed to bridge that gap — offering guidance that was accurate, contextual, and aligned with the instructor's expectations.</p>

                <Image
                    src="/work/squawk/squawk_embed_view.png"
                    alt="Squawk Embed View"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <Image
                    src="/work/squawk/squawk_canvas_view.png"
                    alt="Squawk Canvas View"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Dr. Wickliff adopted the Squawk platform in her classroom by embedding it directly into their learning management system (LMS), Canvas. The integration was seamless — students could access the AI assistant right alongside their course materials without needing to switch platforms or create separate accounts.</p>

                <p>The student response was overwhelmingly positive. Many used Squawk to reinforce concepts they had learned in class and to get help with programming assignments when they were stuck. Because Squawk's responses were grounded in the same materials their professor provided, students felt more confident that the guidance they received was accurate, relevant, and aligned with their coursework.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Continued Progress</p>

                <p>While Squawk's pilot launch with Dr. Wickliff and her students was a great success, I believe there's still plenty of room for improvement. We're continuing to refine the system to deliver better, more contextually aware responses and to expand functionality for both students and educators.</p>

                <p>As the semester progresses, I plan to monitor student usage patterns and gather feedback to understand how we can make Squawk even more effective in real classroom settings. Meanwhile, other members of our team are working on new features, such as a logging dashboard that allows educators to monitor student queries and engagement, as well as technical enhancements to improve the system's ability to recall and interpret context more intelligently.</p>

                <Image
                    src="/work/squawk/squawk_figma_board.png"
                    alt="Squawk Figma"
                    width={1000}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Additionally, Squawk opens up several exciting research opportunities. Because students are using the platform organically, it naturally generates a rich stream of usage data that can offer valuable insights into how learners interact with AI tools. I believe this data could serve as an interesting foundation for future research and publications on the role of AI in education, especially around topics like learning behavior, question patterns, and how AI can complement human instruction.</p>
            </div>
        </div>
    )
}