"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const UpdatePage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async () => {
    try {
      await authClient.updateUser({
        name,
        image,
      });

      alert("Profile updated successfully!");
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("Update failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <p className="text-2xl font-semibold mb-5">Update Your Profile</p>

      <p>Name</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="mb-4 p-2 mt-0.5 w-full rounded-md outline-none border border-green-600"
        type="text"
      />

      <p>Image URL</p>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="mb-4 p-2 mt-0.5 w-full rounded-md outline-none border border-green-600"
        type="text"
      />

      <button
        onClick={handleUpdate}
        className="btn bg-green-600 text-white w-full"
      >
        Update
      </button>
    </div>
  );
};

export default UpdatePage;
