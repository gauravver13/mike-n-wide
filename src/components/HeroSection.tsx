import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* ✅ Mobile View: Horizontal Scroll */}
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 py-8 container">
        {[
          { src: "/model3.png", alt: "Model 3", w: "w-[328px]", h: "h-[384px]" },
          { src: "/bow0.png", alt: "Bow 0", w: "w-[328px]", h: "h-[384px]" },
          { src: "/model2.png", alt: "Model 2", w: "w-[328px]", h: "h-[384px]" },
          { src: "/bow1.png", alt: "Bow 1", w: "w-[328px]", h: "h-[384px]" },
          { src: "/model4.png", alt: "Model 4", w: "w-[328px]", h: "h-[384px]" },
        ].map((img, i) => (
          <div
            key={i}
            className={`relative ${img.w} ${img.h} shrink-0 -mt-[32px] snap-center overflow-hidden`}
          >
            <Link href="/">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                className="object-cover"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ Desktop View: Original Layout */}
      <div className="hidden md:hidden lg:flex text-center lg:justify-center  my-16">
        {/* Left Section */}
        <div>
          <div className="relative w-96 h-80">
            <Link href="/">
              <Image
                src="/model3.png"
                alt="Model 3"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bg-white w-12 h-12 rounded-md bottom-0 right-0 m-5">
                <Image
                    src="/path-right.png"
                    alt="Model 3"
                    fill
                    priority
                    className="object-contain font-bold"
                />
              </div>
            </Link>

          </div>
          <div className="relative w-96 h-64">
            <Link href="/">
              <Image
                src="/bow0.png"
                alt="Bow 0"
                fill
                priority
                className="object-cover"
              />
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <div className="relative w-60 h-80">
            <Link href="/">
              <Image
                src="/model2.png"
                alt="Model 2"
                fill
                priority
                className="object-cover"
              />
            </Link>
          </div>
          <div className="relative w-60 h-64">
            <Link href="/">
              <Image
                src="/bow1.png"
                alt="Bow 1"
                fill
                priority
                className="object-cover"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="relative w-96 h-full">
            <Link href="/">
              <Image
                src="/model4.png"
                alt="Model 4"
                fill
                priority
                className="object-cover"
              />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
