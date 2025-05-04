interface CardColorType {
    color: string;
  }
  
  export default function CardColor({ color }: CardColorType) {
    return (
      <div className="inline-block mb-14">
        <div className="bg-[#D9D9D9] w-72 h-56"></div>
        <div className="font-medium text-lg text-black text-center">{color}</div>
      </div>
    );
  }
  