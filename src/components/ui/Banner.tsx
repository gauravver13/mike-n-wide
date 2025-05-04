import Image from "next/image";
import Button from "./Button";

export default function Banner1() {
    return (
        <div className="m-0 w-full">
            <section className="relative w-full h-screen flex flex-col md:flex-row">
                {/* Left Image - Full width on mobile */}
                <div className="relative w-full md:w-1/2 h-full">
                    <Image
                        src="/model0.png"
                        alt="Model Image"
                        fill
                        className="object-contain lg:object-cover"
                        priority
                    />
                </div>

                {/* Right Image - Hidden on mobile */}
                <div className="relative hidden md:block md:w-1/2 h-full">
                    <Image
                        src="/art0.png"
                        alt="Art Image"
                        fill
                        className="md:object-contain lg:object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Text and Button Section */}
            <div className="relative text-white w-full flex flex-col items-start md:items-center justify-center px-4 -mt-[340px] sm:font-bold md:-mt-52 lg:-mt-32 z-10">

                <div className="text-left lg:text-center leading-normal flex flex-wrap text-xl lg:text-4xl font-semibold tracking-normal">
                    BLEND OF ITALIAN & MODERN ROCO
                </div>
                <div className="mt-2">
                    <Button />
                </div>

            </div>
        </div>
    );
}
