import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableTutors = () => {

  const [tutors, setTutors] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/tutors?limit=6")
      .then(res => {
        setTutors(res.data);
      });

  }, []);

  return (

    <div className="max-w-7xl mx-auto py-16">

      <h1 className="text-4xl font-bold text-center">
        Available Tutors
      </h1>

      <p className="text-center mt-4">
        Find the best tutors for your learning journey
      </p>

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
                  className="h-64 w-full object-cover"
                />
              </figure>

              <div className="card-body">

                <h2 className="card-title">
                  {tutor.name}
                </h2>

                <p>
                  Subject: {tutor.subject}
                </p>

                <p>
                  Experience: {tutor.experience}
                </p>

                <p>
                  Location: {tutor.location}
                </p>

                <p className="font-bold">
                  Fee: ৳{tutor.fee}
                </p>

                <Link
                  to={`/tutorDetails/${tutor._id}`}
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

export default AvailableTutors;