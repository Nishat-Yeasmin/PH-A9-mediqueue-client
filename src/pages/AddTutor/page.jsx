// import React from 'react';


import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AddTutorPage = () => {

     const { user } = useAuth();

  const handleAddTutor = (e) => {

    e.preventDefault();

    const form = e.target;

    const tutorData = {

      tutorName: form.tutorName.value,
      photo: form.photo.value,
      subject: form.subject.value,
      available: form.available.value,
      fee: form.fee.value,
      totalSlot: parseInt(form.totalSlot.value),
      sessionDate: form.sessionDate.value,
      institution: form.institution.value,
      location: form.location.value,
      teachingMode: form.teachingMode.value,

      userEmail: user?.email,
      createdBy: user?.displayName

    };

    fetch("http://localhost:5000/api/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(tutorData)
    })
      .then(res => res.json())
      .then(data => {

        if (data.insertedId) {

          toast.success("Tutor Added Successfully");

          form.reset();
        }
      });
  };
    return (
        <div className="max-w-3xl mx-auto py-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        Add Tutor
      </h1>

      <form onSubmit={handleAddTutor} className="space-y-5">

        <input
          type="text"
          name="tutorName"
          placeholder="Tutor Name"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          required
        />

        <select
          name="subject"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Subject</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>English</option>
        </select>

        <input
          type="text"
          name="available"
          placeholder="Sun - Thu 5PM - 8PM"
          className="input input-bordered w-full"
          required
        />

        <input
          type="number"
          name="fee"
          placeholder="Hourly Fee"
          className="input input-bordered w-full"
          required
        />

        <input
          type="number"
          name="totalSlot"
          placeholder="Total Slot"
          className="input input-bordered w-full"
          required
        />

        <input
          type="date"
          name="sessionDate"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="institution"
          placeholder="Institution & Experience"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        <select
          name="teachingMode"
          className="select select-bordered w-full"
          required
        >
          <option value="">Teaching Mode</option>
          <option>Online</option>
          <option>Offline</option>
          <option>Both</option>
        </select>

        <button className="btn btn-primary w-full">
          Submit
        </button>

      </form>
    </div>
    );
};

export default AddTutorPage;