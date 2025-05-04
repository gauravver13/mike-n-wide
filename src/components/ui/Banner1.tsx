import Image from "next/image";

export default function Banner1() {
    return (
        <>
            <div className="w-full relative  flex flex-col container h-screen my-16">
                    <div className=" mb-7">
                        <Image 
                        src={"/banner200.png"}
                        width={200}
                        height={200}
                        alt="banner2"
                        className="object-contain w-full "
                         />
                    </div>

                    <div className="footer w-full flex justify-between">
                        <div className="left w-2/6">
                            <div className=" text-xs font-bold mb-9 text-black">Blogs</div>
                            <div className=" text-2xl mb-3 font-medium text-black">A Brief History of Mike&Wide and how it all started.</div>
                            <button className=" text-[#191919] font-semibold">Read more {`->`}</button>
                        </div>

                        <div className="right mt-16 mb-4 text-black">
                            <div className="text-sm">Words by  <span className="font-semibold">H. Kumar</span></div>
                            <div className="font-light">Himanshu Kumar</div>
                        </div>
                    </div> 

            </div>
        </>
    )
}