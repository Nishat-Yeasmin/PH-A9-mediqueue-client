import { Link } from "react-router-dom";

// import React from 'react';
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="text-xl mt-4">
        Page Not Found
      </p>

      <Link
        to="/"
        className="btn btn-primary mt-6"
      >
        Go Home
      </Link>

    </div>
    );
};

export default ErrorPage;