import Image from "next/image";
import Link from "next/link";

export default function Work() {
    return (
        <div className="flex flex-col gap-y-12 sm:gap-y-24 py-12 px-4">
            {/* First Row: 3-2 split on desktop, stack on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-6 sm:gap-12">
                {/* Left Thumbnail */}
                <Link href={'/work/chase'} className="md:col-span-3 flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 rounded-2xl h-[300px] sm:h-[400px] p-6">
                        <Image
                            src="/work/jpmc/banner_image.png"
                            alt="Chase Thumbnail"
                            width={400}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <h3 className="text-lg font-medium text-gray-900">
                            Card Benefits @ Chase
                        </h3>
                        <p className="text-gray-500 text-sm">
                            2026 JPMorgan Chase Software Engineering Program Experience
                        </p>
                    </div>
                </Link>

                {/* Right Thumbnail */}
                <Link href={'/work/maroon-rides'} className="md:col-span-2 flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 rounded-2xl h-[300px] sm:h-[400px] p-6">
                        <Image
                            src="/work/maroon_rides/banner_image.png"
                            alt="Maroon Rides Thumbnail"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <h3 className="text-lg font-medium text-gray-900">Maroon Rides</h3>
                        <p className="text-gray-500 text-sm">
                            Helping 50k college students get around
                        </p>
                    </div>
                </Link>
            </div>

            {/* Second Row: 3-2 split on desktop, stack on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-6 sm:gap-12">
                {/* Left Thumbnail */}
                <Link href={'/work/squawk'} className="md:col-span-3 flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 rounded-2xl h-[300px] sm:h-[400px] p-6">
                        <Image
                            src="/work/squawk/banner_image.png"
                            alt="Squawk Thumbnail"
                            width={400}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <h3 className="text-lg font-medium text-gray-900">
                            Squawk
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Building an AI platform for educators
                        </p>
                    </div>
                </Link>

                {/* Right Thumbnail */}
                <Link href={'/work/gradual'} className="md:col-span-2 flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 rounded-2xl h-[300px] sm:h-[400px] p-6">
                        <Image
                            src="/work/gradual/banner_image.png"
                            alt="Gradual Grades Thumbnail"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <h3 className="text-lg font-medium text-gray-900">Gradual Grades</h3>
                        <p className="text-gray-500 text-sm">
                            Mobile app to track students' grades
                        </p>
                    </div>
                </Link>
            </div>

            {/* Third Row: 3 equal columns on desktop, stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 sm:gap-12">
                {/* Left Thumbnail */}
                <Link href={'/work/intelligentchild'} className="flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-[#CBE7FF] via-[#C4C4F9] to-[#8EA1F8] rounded-2xl h-[300px] sm:h-[400px] p-6">
                        <Image
                            src="/work/ichild/banner_image.png"
                            alt="iCHILD Thumbnail"
                            width={175}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <h3 className="text-lg font-medium text-gray-900">
                            intelligentCHILD
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Building an AI-powered health assistant for young mothers
                        </p>
                    </div>
                </Link>

                {/* Middle Thumbnail */}
                <Link href={'/work/humana'} className="flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 rounded-2xl h-[300px] sm:h-[400px] p-6">
                        <Image
                            src="/work/humana/banner_image.png"
                            alt="Humana Thumbnail"
                            width={115}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <h3 className="text-lg font-medium text-gray-900">RAG Customer Service @ Humana</h3>
                        <p className="text-gray-500 text-sm">
                            Humana hackathon winner 2024
                        </p>
                    </div>
                </Link>

                {/* Right Thumbnail */}
                <Link href={"/work/vscode-markdown-editor"} className="flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl h-[300px] sm:h-[400px] p-6">
                        <Image
                            src="/work/vscode/banner_image.png"
                            alt="VSCode Thumbnail"
                            width={125}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4 px-2">
                        <h3 className="text-lg font-medium text-gray-900">VSCode Markdown Editor</h3>
                        <p className="text-gray-500 text-sm">
                            Building a markdown editor extension for VSCode
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}