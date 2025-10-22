import Image from "next/image";

export default function Home() {
  return (
    <div className="flex py-12">
      <div className="grid grid-cols-2 w-full gap-4">
        <div className="text-7xl font-medium flex justify-center items-center">
          <div>
            <p>Sumit</p>
            <p>Nalavade</p>

            <p className="mt-8 text-base text-gray-700 leading-relaxed">
              Howdy! I’m a college student at Texas A&M University and a software
              engineer.
            </p>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              I am passionate about delivering experiences through engineering.
            </p>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              I enjoy learning new things, building projects, and meeting people!
            </p>
          </div>
        </div>

        <div className="text-7xl font-medium flex items-start justify-end">
          <Image
            src="/profile.jpg"
            alt="Sumit Nalavade"
            width={500}
            height={500}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}
