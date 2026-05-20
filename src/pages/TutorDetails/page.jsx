import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const TutorDetailsPage = () => {

  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const [tutor, setTutor] = useState({});

  useEffect(() => {

    axios
      .get(`http://localhost:5000/tutors/${id}`)
      .then(res => {
        setTutor(res.data);
      });

  }, [id]);

  const handleBooking = async () => {

    if (tutor.totalSlot === 0) {

      toast.error("No available slots left");

      return;
    }

    const today = new Date();

    const sessionDate = new Date(tutor.sessionDate);

    if (today < sessionDate) {

      toast.error("Booking is not available yet for this tutor");

      return;
    }

    const bookingData = {

      studentName: user?.displayName,
      studentEmail: user?.email,
      tutorId: tutor._id,
      tutorName: tutor.tutorName,
      bookStatus: "Booked"

    };

    axios
      .post("http://localhost:5000/bookings", bookingData)
      .then(res => {

        if (res.data.insertedId) {

          toast.success("Session Booked Successfully");

          setTutor({
            ...tutor,
            totalSlot: tutor.totalSlot - 1
          });
        }
      });
  };

  return (

    <div className="max-w-5xl mx-auto py-16">

      <img
        src={tutor.photo}
        alt=""
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <div className="mt-8 space-y-3">

        <h1 className="text-4xl font-bold">
          {tutor.tutorName}
        </h1>

        <p>
          Subject: {tutor.subject}
        </p>

        <p>
          Available: {tutor.available}
        </p>

        <p>
          Total Slot: {tutor.totalSlot}
        </p>

        <p>
          Teaching Mode: {tutor.teachingMode}
        </p>

        <p>
          Fee: {tutor.fee} tk
        </p>

        <button
          onClick={handleBooking}
          className="btn btn-primary mt-5"
        >
          Book Session
        </button>

      </div>

    </div>
  );
};

export default TutorDetailsPage;