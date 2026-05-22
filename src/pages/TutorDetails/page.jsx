import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const TutorDetailsPage = () => {

  const { id } = useParams();

  const { user } = useAuth();

  const [tutor, setTutor] = useState({});
  const [loading, setLoading] = useState(true);
 const safeSlot = Number(tutor?.totalSlot ?? 0);


  useEffect(() => {

    axios
      .get(`https://mediqueue-server-tau.vercel.app/api/tutors/${id}`)
      .then(res => {
              console.log("ALL TUTORS RESPONSE:", res.data);

        setTutor(res.data);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to load tutor details");
      })
      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  const handleBooking = async () => {
    

    if (safeSlot <= 0) {

      toast.error("No available slots left");

      return;
    }

    const today = new Date();
     today.setHours(0, 0, 0, 0);

    const sessionDate = new Date(tutor.sessionDate);
    sessionDate.setHours(0, 0, 0, 0);

    if (today > sessionDate) {

      toast.error("Booking is not available yet for this tutor");

      return;
    }

    const bookingData = {

      studentName: user?.displayName,
      studentEmail: user?.email,
      tutorId: tutor._id,
      tutorName: tutor.tutorName || tutor.name,
      sessionDate: tutor.sessionDate,
      fee: tutor.fee,
      bookStatus: "Booked"

    };

   try {
      const res = await axios.post("https://mediqueue-server-tau.vercel.app/api/bookings", bookingData);
      
      if (res.data.insertedId) {
        toast.success("Session Booked Successfully");
        
        
        setTutor(prev => ({
          ...prev,
          totalSlot: prev.totalSlot - 1
        }));
      }
    } catch (error) {
      console.error(error);
      toast.error("Booking failed. Please try again.");
    }
  };

  if (loading){
    return (
      <div className="max-w-5xl mx-auto py-20 text-center">
        <p className="text-xl">Loading tutor details...</p>
      </div>
    );
  }
  return (

    <div className="max-w-5xl mx-auto py-10">

      <img
        src={tutor.photo}
        alt=""
        className="h-[250px] object-center rounded-xl"
      />

      <div className="mt-6 space-y-2">

        <h1 className="text-4xl font-bold">
          {tutor.name}
        </h1>

        <p>
          Subject: {tutor.subject}
        </p>

        <p>
          Available: {tutor.available}
        </p>

        <p>
          Total Slot: {safeSlot}
        </p>

        <p>
          Teaching Mode: {tutor.teachingMode}
        </p>

        <p>
          Fee: {tutor.fee} tk
        </p>

        <button
          onClick={handleBooking}
          disabled={safeSlot <= 0}
          className="btn btn-primary mt-5"
        >
          Book Session
        </button>

      </div>

    </div>
  );
};

export default TutorDetailsPage;