import Image from "next/image";

export default function ProductCard() {
    return (
        <>
            <div className=" border-2 border-amber-500 w-72 px-7 py-6 flex flex-col justify-center items-center h-[555px] m-32 relative">
                    <div className="border border-amber-500 mt-28">
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

                    <div className="bg-red-400 w-full flex flex-col items-center mt-8">
                        <div className="flex px-1">
                            <div><button className="px-4 py-2.5 rounded-md bg-red-950"></button></div>
                            <div><button>h</button></div>
                            <div><button>h</button></div>
                        </div>

                        <div>product-name</div>
                        <div>prdocut cost</div>
                    </div>
            </div>
        </>
    )
}