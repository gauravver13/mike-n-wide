import Image from "next/image";
import Button from "./Button";

export default function Banner1() {
    return (
        <div className="mb-0 container">
            <section className="relative w-full h-screen flex flex-col lg:flex-row">
                {/* Left Image - Full width on mobile */}
                <div className="relative w-full lg:w-1/2 h-full">
                    <Image
                        src="/model0.png"
                        alt="Model Image"
                        fill
                        className="object-contain lg:object-cover"
                        priority
                    />
                </div>

                {/* Right Image - Hidden on mobile */}
                <div className="relative hidden lg:block lg:w-1/2 h-full">
                    <Image
                        src="/art0.png"
                        alt="Art Image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Text and Button Section */}
            <div className="relative w-full flex flex-col items-start lg:items-center justify-center px-4 -mt-64 lg:-mt-24  z-10">

                <div className="text-left lg:text-center leading-normal flex flex-wrap sm:-mt-12 sm:font-bold text-xl lg:text-4xl font-semibold tracking-normal">
                    BLEND OF ITALIAN & MODERN ROCO
                </div>
                <div className="mt-2">
                    <Button />
                </div>

            </div>
        </div>
    );
}
