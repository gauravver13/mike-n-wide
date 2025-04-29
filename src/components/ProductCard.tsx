import Image from "next/image";

export default function ProductCard() {
    return (
        <>
            <div className="w-72 py-6 pb-36 border-[1px] border-[#F2F2F2] flex flex-col justify-center items-center h-[555px] relative">
                    <div className=" mt-28">
                        <Image
                        src="/product0.png"
                        alt="Art Image"
                        // fill
                        width={308}
                        height={231}
                        className="object-cover"
                        priority
                        />
                    </div>

                    <div className="w-full flex flex-col items-center mt-8">
                        <div className="flex px-1">
                            <div><button className="px-4 py-2.5 rounded-lg bg-black "></button></div>
                            <div><button className="px-4 py-2.5 rounded-lg mx-2 bg-[#67686D]"></button></div>
                            <div><button className="px-4 py-2.5 rounded-lg bg-[#743A2D]"></button></div>
                        </div>

                        <div className="mt-10">
                            <div className="font-bold text-black mb-2">PRODUCT NAME</div>
                            <div className="text-black text-center font-medium opacity-70">$ 56</div>

                        </div>
                    </div>
            </div>
        </>
    )
}