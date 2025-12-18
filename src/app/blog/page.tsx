import BlogTile from "@/components/BlogTile";

export default function Blog() {
    return (
        <div className="flex flex-col flex-1 gap-y-12 sm:gap-y-24 px-4 h-full">
            <BlogTile
                title="Fair Use and Performance: A Lesson from Real-World Engineering"
                description="As a high school senior, I built a webscraping API for a personal project and later open sourced it. Four years later, I still maintain the API, and it continues to teach me lessons about serving real users in production."
                date="12/18/2025"
                imageSrc="/blog/fair-use-and-performance/hero-tile.png"
                link="/blog/fair-use-and-performance"
            />
        </div>
    );
}