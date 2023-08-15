import Image from "next/image";
import React from "react";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="font-medium text-grayPrimary whitespace-nowrap px-5">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="flex w-full justify-around mt-4">
        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} alt="hotel" src={"/hotel-icon.png"} />
          <p className="text-sm text-grayPrimary ">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} alt="farm" src={"/farm-icon.png"} />
          <p className="text-sm text-grayPrimary ">Fazenda</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image
            width={30}
            height={30}
            alt="cottage"
            src={"/cottage-icon.png"}
          />
          <p className="text-sm text-grayPrimary ">Chalé</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={30} height={30} alt="inn" src={"/inn-icon.png"} />
          <p className="text-sm text-grayPrimary ">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
