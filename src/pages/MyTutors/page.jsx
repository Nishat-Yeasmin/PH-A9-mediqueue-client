import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const MyTutorsPage = () => {
  const { user } = useAuth();
  const [myTutors, setMyTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTutor, setEditingTutor] = useState(null);

  // Fetch My Tutors
  useEffect(() => {
    if (!user?.email) return;

    axios.get(`http://localhost:5000/tutors?userEmail=${user.email}`)
      .then(res => {
        setMyTutors(res.data);
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to load your tutors");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  // Delete Tutor
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tutor?")) return;

    try {
      await axios.delete(`http://localhost:5000/tutors/${id}`);
      setMyTutors(prev => prev.filter(t => t._id !== id));
      toast.success("Tutor deleted successfully");
    } catch (error) {
         console.error(error);
      toast.error("Failed to delete tutor");
    }
  };

  // Open Edit Modal
  const openEditModal = (tutor) => {
    setEditingTutor(tutor);
  };

  // Update Tutor
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingTutor) return;

    try {
      await axios.put(`http://localhost:5000/tutors/${editingTutor._id}`, editingTutor);
      
      setMyTutors(prev => prev.map(t => t._id === editingTutor._id ? editingTutor : t));
      setEditingTutor(null);
      toast.success("Tutor updated successfully");
    } catch (error) {
         console.error(error);
      toast.error("Failed to update tutor");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading your tutors...</p>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Tutors</h1>

      {myTutors.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">You haven't added any tutors yet.</p>
          <p className="text-gray-400 mt-2">Add your first tutor from "Add Tutor" page.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Fee</th>
                <th>Total Slot</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTutors.map(tutor => (
                <tr key={tutor._id}>
                  <td>{tutor.name}</td>
                  <td>{tutor.subject}</td>
                  <td>{tutor.fee} tk</td>
                  <td>{tutor.totalSlot}</td>
                  <td>{tutor.location}</td>
                  <td>
                    <button 
                      onClick={() => openEditModal(tutor)}
                      className="btn btn-sm btn-primary mr-2"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(tutor._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editingTutor && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-2xl font-bold mb-4">Update Tutor</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editingTutor.name}
                onChange={e => setEditingTutor({...editingTutor, name: e.target.value})}
                className="input input-bordered w-full mb-3"
                placeholder="Name"
                required
              />
              <input
                type="text"
                value={editingTutor.subject}
                onChange={e => setEditingTutor({...editingTutor, subject: e.target.value})}
                className="input input-bordered w-full mb-3"
                placeholder="Subject"
                required
              />
              <input
                type="number"
                value={editingTutor.fee}
                onChange={e => setEditingTutor({...editingTutor, fee: Number(e.target.value)})}
                className="input input-bordered w-full mb-3"
                placeholder="Fee"
                required
              />
              <input
                type="number"
                value={editingTutor.totalSlot}
                onChange={e => setEditingTutor({...editingTutor, totalSlot: Number(e.target.value)})}
                className="input input-bordered w-full mb-3"
                placeholder="Total Slot"
                required
              />

              <div className="modal-action">
                <button type="button" onClick={() => setEditingTutor(null)} className="btn">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTutorsPage;