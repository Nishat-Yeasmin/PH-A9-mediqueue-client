// import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TutorsPage = () => {

    const [tutors, setTutors] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/tutors")
      .then(res => {
        setTutors(res.data);
      });

  }, []);

    return (
         <div className="max-w-7xl mx-auto py-16">

      <h1 className="text-4xl font-bold text-center text-blue-800">
        All Tutors
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {
          tutors.map(tutor => (

            <div
              key={tutor._id}
              className="card bg-base-100 shadow-xl"
            >

              <figure>
                <img
                  src={tutor.photo}
                  alt=""
                  className="h-64 w-full object-center"
                />
              </figure>

              <div className="card-body">

                <h2 className="card-title font-bold text-2xl text-green-700">
                  {tutor.name}
                </h2>

                <p className="font-semibold">
                  Subject: {tutor.subject}
                </p>

                <p className="font-semibold">
                  Experience: {tutor.experience}
                </p>

                <p className="font-semibold">
                  Location: {tutor.location}
                </p>

                <p className="font-bold">
                  Fee: {tutor.fee} tk
                </p>

                <Link
                  to={`/tutors/${tutor._id}`}
                  className="btn btn-primary mt-4"
                >
                  Book Session
                </Link>

              </div>

            </div>

          ))
        }

      </div>

    </div>
    );
};

export default TutorsPage;