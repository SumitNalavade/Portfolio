import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 sm:gap-y-24 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-4">
        <div className="text-7xl font-medium flex items-center md:order-1">
          <div className="w-full">
            <p>Sumit</p>
            <p>Nalavade</p>

            <div className="md:hidden flex justify-center sm:justify-start my-8">
              <Image
                src="/profile.jpg"
                alt="Sumit Nalavade"
                width={500}
                height={500}
                className="rounded-lg object-contain max-w-sm"
              />
            </div>

            <p className="mt-8 text-base text-gray-700 leading-relaxed">
              Howdy! I&apos;m a college student at Texas A&M University and a software
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

        <div className="hidden md:flex text-7xl font-medium items-start justify-end md:order-2">
          <Image
            src="/profile.jpg"
            alt="Sumit Nalavade"
            width={500}
            height={500}
            className="rounded-lg object-contain w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      <div className="space-y-5">
        <p className="font-medium text-3xl">Work Experience</p>

        <ul className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            {/* Left side: logo + text */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/jpmc_logo.png"
                  alt="JPMorgan Chase"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <div className="font-semibold leading-tight">JPMorgan Chase</div>
                <div className="text-sm text-gray-600 leading-tight">
                  Software Engineering Intern
                </div>
              </div>
            </div>

            {/* Right side: date */}
            <div className="text-sm text-gray-500 sm:whitespace-nowrap sm:ml-4">
              June – August 2025
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            {/* Left side: logo + text */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/humana_logo.png"
                  alt="Humana"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <div className="font-semibold leading-tight">Humana</div>
                <div className="text-sm text-gray-600 leading-tight">
                  Software Engineering Intern
                </div>
              </div>
            </div>

            {/* Right side: date */}
            <div className="text-sm text-gray-500 sm:whitespace-nowrap sm:ml-4">
              May – December 2024
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            {/* Left side: logo + text */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/hsc_logo.png"
                  alt="Texas A&M Health Science Center"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <div className="font-semibold leading-tight">Texas A&M Health Science Center</div>
                <div className="text-sm text-gray-600 leading-tight">
                  Development Lead
                </div>
              </div>
            </div>

            {/* Right side: date */}
            <div className="text-sm text-gray-500 sm:whitespace-nowrap sm:ml-4">
              June 2023 – Present
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            {/* Left side: logo + text */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/coe_logo.png"
                  alt="Texas A&M College of Engineering"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <div className="font-semibold leading-tight">Texas A&M College of Engineering</div>
                <div className="text-sm text-gray-600 leading-tight">
                  Undergraduate Teaching Assistant
                </div>
              </div>
            </div>

            {/* Right side: date */}
            <div className="text-sm text-gray-500 sm:whitespace-nowrap sm:ml-4">
              August 2023 – Present
            </div>
          </div>
        </ul>
      </div>

      <div className="space-y-5">
        <p className="font-medium text-3xl">Activities</p>

        <ul className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            {/* Left side: logo + text */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/figma_logo.png"
                  alt="Figma"
                  width={28}
                  height={50}
                />
              </div>

              <div>
                <div className="font-semibold leading-tight">Figma</div>
                <div className="text-sm text-gray-600 leading-tight">
                  Campus Leader
                </div>
              </div>
            </div>

            {/* Right side: date */}
            <div className="text-sm text-gray-500 sm:whitespace-nowrap sm:ml-4">
              August 2025 – Present
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            {/* Left side: logo + text */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/tacs_logo.png"
                  alt="Texas A&M Computing Soceity"
                  className="rounded-lg"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <div className="font-semibold leading-tight">Texas A&M Computing Society</div>
                <div className="text-sm text-gray-600 leading-tight">
                  Technical Officer
                </div>
              </div>
            </div>

            {/* Right side: date */}
            <div className="text-sm text-gray-500 sm:whitespace-nowrap sm:ml-4">
              August 2024 – Present
            </div>
          </div>
        </ul>
      </div>

      <div className="space-y-5">
        <p className="font-medium text-3xl">Education</p>

        <ul className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
            {/* Left side: logo + text */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logos/tamu_logo.png"
                  alt="Texas A&M University"
                  className="rounded-lg"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <div className="font-semibold leading-tight">Texas A&M University</div>
                <div className="text-sm text-gray-600 leading-tight">
                  Bachelor of Science, Computer Engineering
                </div>
              </div>
            </div>

            {/* Right side: date */}
            <div className="text-sm text-gray-500 sm:whitespace-nowrap sm:ml-4">
              August 2022 – May 2026
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}