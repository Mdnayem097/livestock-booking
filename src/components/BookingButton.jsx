"use client";

import { useRouter } from "next/navigation";

export default function BookingButton({ user }) {
  const router = useRouter();

  const handleClick = () => {
    if (user) {
      router.push("/booking-form");
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="btn mt-8 bg-green-600 text-white"
    >
      Booking
    </button>
  );
}