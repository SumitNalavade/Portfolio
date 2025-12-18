import Image from "next/image";
import Link from "next/link";

type BlogTileProps = {
    title: string;
    description: string;
    date: string;
    imageSrc: string;
    imageAlt?: string;
    link?: string;
};

export default function BlogTile({
    title,
    description,
    date,
    imageSrc,
    imageAlt = "Hero image",
    link = "/blog"
}: BlogTileProps) {
    return (
        <Link className="w-full bg-white" href={link}>
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="flex flex-col gap-10 md:flex-row md:items-center">
                    {/* Hero Image */}
                    <div className="w-full md:w-[520px]">
                        <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 520px"
                                priority
                            />
                        </div>
                    </div>


                    {/* Text Content */}
                    <div className="flex-1">
                        <h1 className="max-w-xl text-3xl leading-tight tracking-tight text-slate-900 md:text-4xl">
                            {title}
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-loose tracking-tight text-slate-600">
                            {description}
                        </p>

                        <p className="mt-4 text-xs text-slate-400">{date}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
