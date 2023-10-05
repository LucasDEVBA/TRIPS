"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";
import UserReservationItem from "./components/UserReservationItem";
import Button from "@/components/Button";
import Link from "next/link";

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationsGetPayload<{
      include: { trip: true };
    }>[]
  >([]);
  const { status, data } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      return router.push("/");
    }

    const fetchReservations = async () => {
      const response = await fetch(
        `http://localhost:3000/api/user/${(data?.user as any).id}/reservations`
      );
      const res = await response.json();

      setReservations(res);
    };
    fetchReservations();
  }, [status]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl">
        Minhas Viagens
      </h1>
      {reservations.length > 0 ? (
        reservations?.map((reservation) => (
          <UserReservationItem key={reservation.id} reservation={reservation} />
        ))
      ) : (
        <div className="flex flex-col">
          <p className="font-medium text-primaryDarker mt-2">
            Você ainda não tem nenhuma reservar
          </p>
          <Link href="/">
            <Button className="w-full mt-2">Fazer reserva</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyTrips;
