import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  { params: { reservationId } }: { params: { reservationId: string } }
) {
  if (!reservationId) {
    return {
      status: 400,
      body: {
        message: "reservationId não existe",
      },
    };
  }

  const reservation = await prisma.tripReservations.delete({
    where: {
      id: reservationId,
    },
  });
  return new NextResponse(JSON.stringify(reservation), { status: 200 });
}
