// import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
const RegisterPage = () => {

     const { createUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    // password validation

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain an uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain a lowercase letter");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {

      await createUser(email, password);

      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration Successful");

      navigate("/");

    } catch (error) {
      toast.error(error.message);
    }
  };
    return (
         <div className="min-h-screen flex justify-center items-center">

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">

        <div className="card-body">

          <h1 className="text-3xl font-bold text-center">
            Register
          </h1>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full mt-3"
              required
            />

            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full mt-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mt-3"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mt-3"
              required
            />

            {
              error &&
              <p className="text-red-500 mt-2">
                {error}
              </p>
            }

            <button className="btn btn-primary w-full mt-4">
              Register
            </button>

          </form>

          <p className="text-center mt-4">
            Already have an account?

            <Link
              to="/login"
              className="text-blue-500 ml-1"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
    );
};

export default RegisterPage;