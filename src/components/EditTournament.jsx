import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTournament = ({ tournaments, updateTournament }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tournament = tournaments.find((t) => t.id === Number(id));
  const [name, setName] = useState(tournament ? tournament.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTournament(Number(id), name);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Tournament</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTournament;
