import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Banner1() {
    return (
            <div>
                <section className="relative flex w-full h-screen">
                <div className="relative w-1/2 h-full">
                    <Image
                    src="/model0.png"
                    alt="Model Image"
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
                <div className="relative w-1/2 h-full">
                    <Image
                    src="/art0.png"
                    alt="Art Image"
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
                </section>
                <div className="relative w-full flex justify-center -mt-40 z-10 text-3xl font-[32px] tracking-wide">BLEND OF ITALIAN AND MODERN ROCO </div>
                <div className="flex justify-center mt-4">
                    <Button />
                </div>
            </div>
    )
}