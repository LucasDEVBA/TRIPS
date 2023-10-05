"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TripReservations } from "@prisma/client";

const MyTrips = () => {
  const [reservations, setReservations] = useState<TripReservations[]>([]);
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

  return <div>My Trips</div>;
};

export default MyTrips;
