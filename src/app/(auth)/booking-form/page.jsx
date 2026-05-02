"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

export default function Form() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      toast.error("All fields are required!");
      return;
    }

    toast.success("Form submitted successfully!");

    setFormData({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend pt-10 text-xl font-semibold">Booking From</legend>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="label">Phone Number</label>
          <input
            type="number"
            name="phone"
            className="input"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <button className="btn bg-green-600 mt-4 text-white" type="submit">
            Submit
          </button>
          <ToastContainer />
        </fieldset>
      </form>
    </div>
  );
}