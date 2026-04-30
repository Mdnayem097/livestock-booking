'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const handelRegister = async (data) => {
        const {email, name, image, password} = data;
        const { data: res, error } = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    image: image,
    callbackURL: "/",
});
    }
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
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
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}

            <label className="label">Image URL</label>
            <input
              type={"text"}
              {...register("image", { required: "image url field is required" })}
              className="input"
              placeholder="Enter Image URL"
            />
            {errors.image && <p className="text-red-600">{errors.image.message}</p>}




            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "email field is required" })}
              className="input mb-3"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}

            <label className="label">Password</label>
            <input
              type={"password"}
              {...register("password", { required: "password field is required" })}
              className="input"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}

            <button className="btn btn-neutral mt-4">Register Now</button>
          </fieldset>
        </form>
        <p>
          Do you have an account?{" "}
          <Link className="text-blue-500" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;





// import Link from 'next/link';
// import React from 'react';

// const RegisterPage = () => {
//     return (
//         <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
//       <div className="p-4 rounded-xl bg-white">
//         <h2 className="font-bold text-3xl text-center mb-10">
//           Register Your Account
//         </h2>
//         <form>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2">
//             <label className="label">Name</label>
//             <input
//               type="text"
//               className="input"
//               placeholder="Enter Your Name"
//             />

//             <label className="label">Photo URL</label>
//             <input
//               type="text"
//               className="input"
//               placeholder="Type Hear Photo URL"
//             />
//             <label className="label">Email</label>
//             <input
//               type="email"
//               className="input"
//               placeholder="Email"
//             />

//             <label className="label">Password</label>
//             <input
//               type="password"
//               className="input"
//               placeholder="Password"
//             />

//             <button className="btn btn-neutral mt-4">Register</button>
//           </fieldset>
//         </form>
//         <p>
//           Dont Have An Account?{" "}
//           <Link className="text-blue-500" href={"/login"}>
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//     );
// };

// export default RegisterPage;