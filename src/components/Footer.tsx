import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 flex justify-center items-center flex-col">
      <Image src={"/logo.png"} alt="Logo" width={133} height={133} />
      <p className="text-sm font-medium text-primaryDarker mt-1">
        {" "}
        Todos os direitos reservados.
      </p>
    </div>
  );
};
export default Footer;
