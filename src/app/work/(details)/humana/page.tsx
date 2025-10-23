import Image from "next/image"

export default function Details() {
    return (
        <div className="flex flex-col gap-y-12 py-8">
            <div className="text-center">
                <p className="text-6xl font-light tracking-tight text-gray-900">
                    RAG Customer Service @ Humana
                </p>
                <p className="mt-4 text-gray-500">
                    Humana hackathon winner 2024
                </p>
            </div>

            <div className="flex justify-center items-center bg-gradient-to-br from-[#BCE3FA] via-[#C9C4F7] to-[#F4C26A] rounded-2xl h-[500px] p-6">
                <Image
                    src="/work/humana/banner_image.png"
                    alt="Humana Thumbnail"
                    width={200}
                    height={300}
                    className="object-contain"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Overview</p>

                <p>During the summer after my sophomore year of college, I interned at Humana, a leading health insurance provider, as a software engineering intern. One of the major highlights of my internship was winning Humana’s annual hackathon, where I competed alongside and against experienced full-time engineers and other professionals. It was an incredible experience that challenged me to think creatively, collaborate effectively, and build a solution that stood out even among seasoned developers.</p>

                <p>Our project was a Retrieval-Augmented-Generation (RAG) based customer service application that answered customers’ question about their health insurance plans through a web interface.</p>

                <Image
                    src="/work/humana/health_harmony_screenshot.png"
                    alt="Health Harmony screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <Image
                    src="/work/humana/humana_hackathon_winner.png"
                    alt="Humana Hackathon Winner"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Background</p>

                <p>As the fourth-largest health insurer in the United States, Humana serves millions of customers, each with unique needs covered under custom insurance plans. These plans are documented in detailed Statements of Benefits (SOBs), which outline coverage terms, limits, and exclusions. When customers have questions about their plans, they typically contact Humana’s support agents, who look up the customer’s SOB using an ID number and then interpret the relevant sections before responding.</p>

                <p>However, this process is time-consuming and error-prone. Agents must manually search through lengthy documents, interpret complex policy language, and explain it to customers in simpler terms. This not only slows down response times but also introduces room for miscommunication and human error, especially when dealing with large volumes of inquiries or nuanced policy questions.</p>

                <p>We wanted to build a solution that would reduce friction in the customer support process. While human agents excel at handling complex questions, many customers simply need quick answers to common or straightforward inquiries. Yet, they still have to wait in long queues to speak with an agent. Our idea was to create a self-service portal where users could log in, ask questions about their insurance plans, and instantly receive accurate, personalized responses, all without needing to contact customer support.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Development</p>

                <p>We decided to build a web-based application to maximize accessibility and convenience for users. Through the platform, customers could upload their Statement of Benefits (SOB) document and then ask questions directly within a simple, chat-style interface. Behind the scenes, the system used AI-powered document understanding to analyze the uploaded file and generate clear, accurate answers to the customer’s questions.</p>

                <p>We chose to use modern web technologies to build the application, including TypeScript and Next.js, which allowed us to develop a performant and maintainable full-stack solution.</p>

                <Image
                    src="/work/humana/health_harmony_tech_stack.png"
                    alt="Health Harmony Tech Stack"
                    width={400}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>The answers would be generated via Retrieval-Augmented Generation (RAG) — a technique that combines information retrieval with natural language generation. When a customer uploaded their Statement of Benefits document, the system would first parse and chunk the text into smaller sections, then generate vector embeddings for each chunk. These embeddings were stored in a database for fast semantic search. When the customer later asked a question, the system would convert the query into a vector, retrieve the most relevant chunks from the document, and then pass those chunks to a large language model (LLM) to generate a clear, human-like response grounded in the user’s own benefits document.</p>

                <Image
                    src="/work/humana/rag_diagram.png"
                    alt="RAG Diagram"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8"
                />

                <p>Development was smooth sailing as I had a team of other fellow interns supporting me. I focused mainly on the frontend design and development of the project while the rest of my team help build the RAG loop.</p>

                <Image
                    src="/work/humana/team_screenshot.png"
                    alt="Team Screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Reception</p>

                <p>After 24 hours of nonstop hacking, including an all-nighter with my team, we presented our project to the entire company, showcasing both the technical implementation and the business value it could bring to Humana. Our demo highlighted how the system could improve customer satisfaction and reduce support overhead through automation. We were thrilled when our project was awarded first place, especially as an all-intern team competing against seasoned engineers and professionals.</p>
            </div>
        </div>
    )
}