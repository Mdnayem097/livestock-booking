"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-10">
          Login Your Account
        </h2>
        <form onSubmit={handleSubmit(handelLogin)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
              type={"password"}
              {...register("password", {
                required: "password field is required",
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          Dont Have An Account?{" "}
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
