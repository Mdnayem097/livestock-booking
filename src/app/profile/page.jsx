"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/img/default-avatar.jpg";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (!user) {
    return <p className="text-center mt-10">Please login first</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 shadow rounded">
      <h2 className="text-xl font-bold mb-5">My Profile</h2>

      <Image
        src={user?.image || userAvatar}
        alt="user"
        width={80}
        height={80}
        className="rounded-full mb-4"
      />

      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <Link href={"/update"} className="btn bg-green-600 text-white mt-3">Update Profile</Link>
    </div>
  );
}
