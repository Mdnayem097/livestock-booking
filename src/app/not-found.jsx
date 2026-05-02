"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">

        <div className="text-6xl mb-4">🐄</div>

        <h1 className="text-4xl font-bold text-red-500 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="flex flex-col gap-3">

          <Link
            href="/"
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => router.back()}
            className="bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Go Back
          </button>

        </div>
      </div>
    </div>
  );
}