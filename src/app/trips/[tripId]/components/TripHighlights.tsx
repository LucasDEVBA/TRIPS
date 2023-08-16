import Image from "next/image";
import React from "react";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div>
      <div className="flex flex-col p-5">
        <h2 className="font-semibold text-primaryDarker mb-3">Destaques</h2>
        <div className="flex flex-wrap gap-y-4">
          {highlights.map((highlight, index) => (
            <div key={highlight} className="flex items-center gap-1 w-1/2">
              <Image
                src={"/check-icon.png"}
                width={15}
                height={15}
                alt={highlight}
              />
              <p className="text-grayPrimary text-xs">{highlight}</p>
            </div>
          ))}
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default TripHighlights;
