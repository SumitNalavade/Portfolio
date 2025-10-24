import Image from "next/image"

export default function Details() {
    return (
        <div className="flex flex-col gap-y-12 py-8 px-4">
            <div className="text-center">
                <p className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
                    intelligentCHILD
                </p>
                <p className="mt-4 text-gray-500">
                    Building an AI-powered health assistant for young mothers
                </p>
            </div>

            <div className="flex justify-center items-center bg-gradient-to-br from-[#CBE7FF] via-[#C4C4F9] to-[#8EA1F8] rounded-2xl h-[300px] sm:h-[400px] lg:h-[500px] p-4 lg:p-6">
                <Image
                    src="/work/ichild/banner_image.png"
                    alt="Gradual Thumbnail"
                    width={250}
                    height={250}
                    className="object-contain w-[180px] sm:w-[220px] lg:w-[250px] h-auto max-w-full max-h-full"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Overview</p>

                <p>My research team at the Texas A&M Health Science Center wanted to address the problem of how disadvantaged  mothers in underserved areas of Texas typically experience low health literacy and limited medical resources. To make their obstacle worse,  conventional search engines, like Google, have little consideration of  user location and needs, making it difficult to find local and  accessible healthcare services.</p>

                <p>intelligentCHILD (iCHILD) is a semantic search engine designed to empower vulnerable populations by providing access to contextually accurate, vetted resources through a conversational, natural-language interface</p>

                <p>I was hired as a front-end developer to help transform the existing iCHILD project into a publicly accessible platform. The iCHILD project was originally created by a group of senior computer science students as part of their capstone, but it needed significant redevelopment to reach production-level quality. My work involved redesigning and rebuilding the entire frontend, as well as collaborating on database architecture and API development to modernize the platform and make it more scalable and user-friendly.</p>

                <Image
                    src="/work/ichild/ichild_screenshot.png"
                    alt="iCHILD screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Development</p>

                <p>Initially, I focused on rebuilding the frontend of the iCHILD application. The previous version had been developed using a mix of vanilla JavaScript and templating languages, which made it difficult to maintain and extend. I decided to modernize the stack by introducing React.js, TypeScript, and Vite, a combination that significantly improved the app's performance, scalability, and developer experience. This new setup also made the codebase easier to understand and opened the door for future contributors to build on top of it more efficiently.</p>

                <Image
                    src="/work/ichild/ichild_tech_stack.png"
                    alt="ichild tech stack"
                    width={600}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Working with a designer, we quickly modernized the frontend of the application, creating a sleek, responsive, and user-friendly interface. The new design focused on clean visuals, intuitive navigation, and accessibility, ensuring that users could easily search for resources and interact with the platform across all devices.</p>

                <Image
                    src="/work/ichild/ichild_before_after.png"
                    alt="ichild before after"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Next, it was necessary to develop the backend APIs from the ground up. My focus was on reliability and simplicity  using proven technologies and avoiding unnecessary architectural complexity. The goal was to build a solid, maintainable foundation that could scale as the platform grew, while keeping the system easy to debug and extend for future developers.</p>

                <p>Our new backend was built as a monolithic Flask application, serving a collection of RESTful routes for core functionality such as authentication, data retrieval, and resource management. I chose this framework because it struck the right balance between simplicity and flexibility. Flask allowed us to rapidly prototype new features while still providing the structure needed for production-grade reliability. Its lightweight nature made it easy to integrate with our frontend and database, and the large ecosystem of extensions ensured we could easily add functionality like authentication, caching, and API documentation as the platform evolved.</p>

                <Image
                    src="/work/ichild/flask_logo.png"
                    alt="flask_logo"
                    width={600}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Once the backend was fully developed and integrated with the frontend, it was time to deploy the new application for users. I chose to host the entire platform on an AWS EC2 virtual machine, as it provided full control over the deployment environment, flexible scaling options, and easy integration with other AWS services. This setup allowed us to manage both the frontend and backend within a single environment, simplifying deployment and maintenance while ensuring the system remained stable and responsive under real-world usage.</p>

                <Image
                    src="/work/ichild/aws_logo.png"
                    alt="aws_logo"
                    width={300}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>This marked the completion of our full redevelopment of the iCHILD project, transforming it from the original version built by the computer science students into a modern, production-ready platform. The new application not only looked and felt more polished but was also built with clean, maintainable code and strong engineering practices under the hood. During user acceptance testing (UAT), we saw a significant improvement in user sentiment and feedback.</p>

                <p>This milestone opened the door for continued improvements to the project, including enhancing the AI-generated responses and making it easier for our team at the Texas A&M Health Science Center to administer and manage the application. With the foundation rebuilt and modernized, we now have the flexibility to continue evolving the platform adding new features, refining performance, and exploring new ways to integrate AI into healthcare and community resource access.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Challenges - Admin Dashboard</p>

                <p>One of the biggest challenges we faced with the iCHILD application was data management. The platform stores a vetted knowledge base of trusted providers including clinics, doctors, nurses, food pantries, and other community resources, all hosted in a database within our AWS VM. While this setup gave us complete control over the data, we encountered challenges in both sourcing new, reliable information and maintaining existing records to ensure accuracy and freshness.</p>

                <p>When staff members at the Texas A&M Health Science Center wanted to update the iCHILD database — for example, to add a new provider to recommend to users, they had to contact me directly to make the change manually on the AWS virtual machine. While this process worked, it was inefficient and introduced unnecessary friction. Staffers had no way to view, edit, or manage data themselves, which slowed down updates and made it difficult to keep the provider database fully up to date.</p>

                <p>To solve this problem, I led the development of an internal admin dashboard for staff members on our team. Authorized users could log into the iCHILD application using their credentials to gain access to a secure, web-based dashboard. From there, they could view, add, update, and delete data from the knowledge base — including provider listings, contact information, and other relevant details used to generate recommendations and AI responses. </p>

                <Image
                    src="/work/ichild/admin_panel.png"
                    alt="admin dashboard"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Challenges - Chat Responses</p>

                <p>Another major challenge our team faced involved the quality and contextual relevance of the AI-generated responses. While the system could retrieve and generate information from the knowledge base, the responses often lacked precision or context, sometimes pulling in irrelevant details or failing to surface the most appropriate data. We noticed that certain queries didn't consistently retrieve the correct entries from the knowledge base, resulting in answers that were either incomplete or off-topic.</p>

                <p>When the previous computer science students developed the system, they used a combination of BERT and a basic keyword-based retrieval method to generate responses. While BERT provided some level of semantic understanding, the retrieval process lacked contextual awareness — it didn't always surface the most relevant information from the knowledge base. As a result, responses were often technically correct but contextually misaligned, especially when multiple similar entries existed.</p>

                <p>To improve this, we decided to rebuild the entire response generation process from the ground up. Rather than relying on BERT and keyword-based retrieval, we adopted a Retrieval-Augmented Generation (RAG) approach.</p>

                <p>With RAG, each user query is first converted into a vector embedding and compared against the stored embeddings of provider information in the database. The system then retrieves the most semantically relevant entries and feeds them into a large language model, which generates a contextually aware and factually aligned response. This shift dramatically improved the accuracy, consistency, and contextual depth of the system's outputs.</p>

                <Image
                    src="/work/ichild/rag_diagram.png"
                    alt="RAG Diagram"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Additionally, we wanted the iCHILD knowledge base to go beyond just physical, brick-and-mortar providers such as clinics, food pantries, and hospitals. The Texas A&M Health Science Center had developed a rich collection of digital resources — including academic journals, articles, infographics, and educational videos — that contained valuable, trustworthy information.</p>

                <Image
                    src="/work/ichild/olivia_screenshot.png"
                    alt="Olivia Screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Our goal was to integrate these materials directly into the knowledge base, allowing the AI system to draw not only from location-based data but also from informational and educational content when generating responses. This would enable iCHILD to provide more holistic and informative answers, combining practical service recommendations with evidence-based health knowledge.</p>

                <p>We started by aggregating all available data — including information about physical providers as well as the digital assets developed by the Health Science Center. This content was then processed into smaller, meaningful chunks and transformed into vector embeddings, which we stored in the iCHILD database. These embeddings represented the semantic meaning of each piece of information, allowing the system to perform contextual similarity searches rather than relying on exact keyword matches.</p>

                <p>When a user submitted a query, the system would convert the query into an embedding and retrieve the most relevant chunks from the database. These retrieved pieces of information were then passed to the LLM, which used them as context to generate an accurate, grounded, and contextually relevant response.</p>

                <Image
                    src="/work/ichild/ichild_mobile_screenshot.png"
                    alt="Olivia Screenshot"
                    width={600}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>Furthermore, we integrated the new RAG pipeline with the admin dashboard developed earlier. This integration ensured that whenever staff members at the Health Science Center updated the iCHILD knowledge base whether by adding new providers, uploading resources, or editing existing entries, the system would automatically generate new embeddings for the updated content. These embeddings were then stored in the iCHILD database, allowing the platform to instantly reflect the latest information in its responses. As a result, updates made by administrators directly influenced the quality and accuracy of AI-generated answers, keeping the system both dynamic and continuously improving.</p>
            </div>

            <div className="space-y-2">
                <p className="text-xl font-semibold">Reception + Awards</p>

                <p>We released iCHILD to the general public, and the response was overwhelmingly positive. Users appreciated the convenience and reliability of being able to find trusted, vetted information directly through the platform. Many highlighted how helpful it was to have both local provider recommendations and educational health resources available in one place, making it easier to access the care and knowledge they needed.</p>

                <Image
                    src="/work/ichild/ichild_poster.png"
                    alt="HAC screenshot"
                    width={800}
                    height={500}
                    className="object-contain mx-auto my-8 h-auto"
                />

                <p>In addition, we were able to present our work on iCHILD at several conferences including at The Office of Interprofessional Practice, Education, & Research (IPER) at Texas A&M Health Science Center where we won the people's choice award</p>

                <p>Personally, I've learned a tremendous amount from working on this project. From full-stack development to AI engineering, iCHILD gave me the opportunity to wear many different hats and gain hands-on experience across the entire product lifecycle. The lessons I learned about building scalable systems, managing data pipelines, and designing for real-world users have carried over into my professional work and continue to shape how I approach engineering challenges and product design today.</p>
            </div>
        </div>
    )
}