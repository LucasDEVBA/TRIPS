import Image from "next/image";
import Link from "next/link";
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
      <div className="flex w-full justify-between mt-4  lg:mt-10 lg:justify-center lg:gap-40">
        <div className="flex flex-col items-center gap-1">
          <Link
            href={"/trips/search?text=hotel"}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={30} height={30} alt="hotel" src={"/hotel-icon.png"} />
            <p className="text-sm lg:text-base text-grayPrimary ">Hotel</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={"/trips/search?text=fazenda"}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={30}
              height={30}
              alt="fazenda"
              src={"/farm-icon.png"}
            />
            <p className="text-sm lg:text-base text-grayPrimary ">Fazenda</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={"/trips/search?text=Chalé"}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image
              width={30}
              height={30}
              alt="Chalé"
              src={"/cottage-icon.png"}
            />
            <p className="text-sm lg:text-base text-grayPrimary ">Chalé</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href={"/trips/search?text=Pousada"}
            className="flex flex-col items-center hover:text-primary transition-all"
          >
            <Image width={30} height={30} alt="Pousada" src={"/inn-icon.png"} />
            <p className="text-sm lg:text-base text-grayPrimary ">Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
