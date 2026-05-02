"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookingButton({ user }) {
  const router = useRouter();

  return (
    <Link
    href={'/booking-form'}
      className="btn mt-8 bg-green-600 text-white"
    >
      Booking
    </Link>
  );
}