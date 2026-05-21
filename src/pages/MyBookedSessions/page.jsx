// import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
// import Spinner from "../../components/Spinner";

const MyBookedSessions = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelingId, setCancelingId] = useState(null); 

  // Fetch User's Bookings
  useEffect(() => {
    if (!user?.email) return;

    axios.get(`http://localhost:5000/bookings?studentEmail=${user.email}`)
    
      .then(res => {
        setBookings(res.data);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to load your booked sessions");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  // Cancel Booking
  const handleCancel = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to cancel this booking?");

    if (!isConfirmed) return;

    setCancelingId(id);

    try {
      const res = await axios.patch(`http://localhost:5000/bookings/${id}`, {
        bookStatus: "Cancelled"
      });

      if (res.data.modifiedCount > 0) {
       
        setBookings(prev =>
          prev.map(booking =>
            booking._id === id ? { ...booking, bookStatus: "Cancelled" } : booking
          )
        );
        toast.success("Booking cancelled successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel booking");
    } finally {
      setCancelingId(null);
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading your booked sessions...</p>;
    
  }

//   if (loading) {
//     return <Spinner />;
//   }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Booked Sessions</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">You haven't booked any sessions yet.</p>
          <p className="text-gray-400 mt-3">Browse tutors and book your first session.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Tutor Name</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking._id}>
                  <td className="font-medium">{booking.tutorName}</td>
                  <td>{booking.studentName}</td>
                  <td>{booking.studentEmail}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.bookStatus === "Booked"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {booking.bookStatus}
                    </span>
                  </td>
                  <td>
                    {booking.bookStatus === "Booked" && (
                      <button
                        onClick={() => handleCancel(booking._id)}
                        disabled={cancelingId === booking._id}
                        className="btn btn-sm btn-error"
                      >
                        {cancelingId === booking._id ? "Cancelling..." : "Cancel"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookedSessions;