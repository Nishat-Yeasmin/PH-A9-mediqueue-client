import Banner from "../../components/Banner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
 
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tutors?limit=6")
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);

  
  return (
    <div>

      {/* ================= BANNER ================= */}
      <Banner />

      {/* ================= AVAILABLE TUTORS ================= */}
      <div className="max-w-7xl mx-auto py-16">

        <h1 className="text-4xl font-bold text-center">
          Available Tutors
        </h1>

        <p className="text-center mt-4">
          Find skilled tutors for your learning journey
        </p>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {tutors.map((tutor) => (
            <div key={tutor._id} className="card bg-base-100 shadow-xl p-5">

              <img
                src={tutor.photo}
                alt={tutor.name}
                className="h-60 w-full object-center rounded-xl"
              />

              <h2 className="text-xl text-green-700 font-bold mt-3">
                {tutor.name}
              </h2>

              <p className="text-sm text-gray-500">
                {tutor.subject}
              </p>

              <p className="mt-2 font-semibold">
                Tk.{tutor.fee}
              </p>

              <Link
                to={`/tutor/${tutor._id}`}
                className="btn btn-primary mt-4"
              >
                Book Session
              </Link>

            </div>
          ))}

        </div>
      </div>

      {/* ================= EXTRA SECTION 1 ================= */}
      <div className="bg-base-200 py-16">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-4xl font-bold">
            Why Choose MediQueue?
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="card bg-base-100 shadow-xl p-6">
              <h2 className="text-2xl font-bold">Expert Tutors</h2>
              <p className="mt-3">
                Learn from experienced and verified tutors.
              </p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <h2 className="text-2xl font-bold">Flexible Schedule</h2>
              <p className="mt-3">
                Book sessions at your preferred time.
              </p>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <h2 className="text-2xl font-bold">Online Learning</h2>
              <p className="mt-3">
                Learn from anywhere with online sessions.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= EXTRA SECTION 2 ================= */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-center">
            Student Reviews
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="card bg-base-100 shadow-xl p-6">
              <p>“Amazing platform for finding tutors.”</p>
              <h3 className="font-bold mt-4">- Sarah</h3>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <p>“Very easy booking system.”</p>
              <h3 className="font-bold mt-4">- David</h3>
            </div>

            <div className="card bg-base-100 shadow-xl p-6">
              <p>“Helped me improve my grades.”</p>
              <h3 className="font-bold mt-4">- Alex</h3>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default HomePage;