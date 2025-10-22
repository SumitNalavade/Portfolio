import Image from "next/image";
import Link from "next/link";

export default function Work() {
    return (
        <div className="flex flex-col gap-y-24 py-12">
            <div className="grid grid-cols-5 w-full gap-12">
                {/* Left Thumbnail */}
                <Link href={'/'} className="col-span-3 flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-yellow-100 via-blue-100 to-cyan-100 rounded-2xl h-[400px] p-6">
                        <Image
                            src="/work/jpmc/banner_image.png"
                            alt="Chase Thumbnail"
                            width={400}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">
                            Card Benefits @ Chase
                        </h3>
                        <p className="text-gray-500 text-sm">
                            2026 JPMorgan Chase Software Engineering Program Experience
                        </p>
                    </div>
                </Link>

                {/* Right Thumbnail */}
                <Link href={'/'} className="col-span-2 flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl h-[400px] p-6">
                        <Image
                            src="/work/maroon_rides/banner_image.png"
                            alt="Maroon Rides Thumbnail"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">Maroon Rides</h3>
                        <p className="text-gray-500 text-sm">
                            Helping 50k college students get around
                        </p>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-5 w-full gap-12">
                {/* Left Thumbnail */}
                <Link href={'/'} className="col-span-3 flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-[#E7FAD9] via-[#C6F2E4] to-[#B9E5F5] rounded-2xl h-[400px] p-6">
                        <Image
                            src="/work/squawk/banner_image.png"
                            alt="Squawk Thumbnail"
                            width={400}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">
                            Squawk
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Building an AI platform for educators
                        </p>
                    </div>
                </Link>

                {/* Right Thumbnail */}
                <div className="col-span-2 flex flex-col">
                    <Link href={'/'} className="flex justify-center items-center bg-gradient-to-br from-[#E3D9F9] via-[#E8CFF2] to-[#C7E5FA] rounded-2xl h-[400px] p-6">
                        <Image
                            src="/work/gradual/banner_image.png"
                            alt="Gradual Grades Thumbnail"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </Link>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">Gradual Grades</h3>
                        <p className="text-gray-500 text-sm">
                            Mobile app to track students’ grades
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 w-full gap-12">
                {/* Left Thumbnail */}
                <Link href={'/'} className="flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-[#CBE7FF] via-[#C4C4F9] to-[#8EA1F8] rounded-2xl h-[400px] p-6">
                        <Image
                            src="/work/ichild/banner_image.png"
                            alt="iCHILD Thumbnail"
                            width={175}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">
                            intelligentCHILD
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Building an AI-powered health assistant for young mothers
                        </p>
                    </div>
                </Link>

                {/* Right Thumbnail */}
                <Link href={'/'} className="flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-[#BCE3FA] via-[#C9C4F7] to-[#F4C26A] rounded-2xl h-[400px] p-6">
                        <Image
                            src="/work/humana/banner_image.png"
                            alt="Humana Thumbnail"
                            width={115}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">RAG Customer Service @ Humana</h3>
                        <p className="text-gray-500 text-sm">
                            Humana hackathon winner 2024
                        </p>
                    </div>
                </Link>

                <Link href={"/"} className="flex flex-col">
                    <div className="flex justify-center items-center bg-gradient-to-br from-[#BEE7FA] via-[#C7D3F8] to-[#F7C6DA] rounded-2xl h-[400px] p-6">
                        <Image
                            src="/work/vscode/banner_image.png"
                            alt="VSCode Thumbnail"
                            width={125}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="mt-4">
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
