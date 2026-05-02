"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = async (data) => {
    const { email, name, image, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
      return;
    }

    if (res) {
      toast.success("Registration successful!");

      setTimeout(() => {
        router.push("/login");
      }, 1200);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
      <div className="p-4 rounded-xl">
        <h2 className="font-bold text-3xl text-center mb-10">
          Register Your Account
        </h2>

        <form onSubmit={handleSubmit(handelRegister)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: "name field is required" })}
              className="input mb-3"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}

            <label className="label">Image URL</label>
            <input
              type="text"
              {...register("image", {
                required: "image url field is required",
              })}
              className="input"
              placeholder="Enter Image URL"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image.message}</p>
            )}

            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "email field is required" })}
              className="input mb-3"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "password field is required",
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}

            <button className="btn btn-neutral mt-4">Register Now</button>
          </fieldset>
        </form>
        
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center cursor-pointer my-1.5 justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md mx-auto"
        >
          <FcGoogle className="w-5 h-5"></FcGoogle>
          <span>Sign In With Google</span>
        </button>
        <p className="text-center">
          Do you have an account?{" "}
          <Link className="text-blue-500" href={"/login"}>
            Login
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterPage;
