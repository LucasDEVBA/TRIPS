"use client";

import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface GetTripsParams {
  text: string;
  startDate: Date | null;
  budget?: string;
}

const Trips = () => {
  const [trips, setTrips] = useState<Trip[]>();

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `/api/trips/search?text=${
          searchParams.get("text") ?? ""
        }&startDate=${searchParams.get("startDate")}&budget=${searchParams.get(
          "budget"
        )}`
      );

      const data = await response.json();

      setTrips(data);
    };

    fetchTrips();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center p-5">
      <h1 className="text-primaryDarker font-semibold text-xl">
        {trips?.length > 0
          ? "Hospedagens Encontradas"
          : "Não encontramos nenhuma hospedagem"}
      </h1>
      <h2 className="text-grayPrimary font-medium mb-5">
        {trips?.length > 0 ? "Listamos as melhores hospedagens para você!" : ""}
      </h2>
      <div className="flex flex-col gap-5">
        {trips?.map((trip) => <TripItem key={trip.id} trip={trip} />)}
      </div>
    </div>
  );
};
export default Trips;
