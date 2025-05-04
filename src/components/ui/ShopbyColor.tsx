import CardColor from "./CardColor";

export default function ShopbyColor() {
    return (
        <>
            <div className="w-full mt-64 container flex flex-col">
                <div className="text-black text-center text-xl font-normal">SHOP BY COLOR</div>
                <div className="flex flex-wrap justify-between mb-20 mt-16">
                    {/* <CardColor> */}
                    <CardColor color={"Sleepy Blue"} />
                    <CardColor color={"Ripe Olive"} />
                    <CardColor color={"Sleepy Blue"} />
                    <CardColor color={"Sleepy Blue"} />
                    <CardColor color={"Sleepy Blue"} />
                    <CardColor color={"Sleepy Blue"} />
                    <CardColor color={"Sleepy Blue"} />
                    <CardColor color={"Sleepy Blue"} />
                </div>
            </div>
        </>
    )
}