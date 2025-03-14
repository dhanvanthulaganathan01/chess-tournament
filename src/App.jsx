import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import TournamentList from "./components/TournamentList";
import CreateTournament from "./components/CreateTournament";
import EditTournament from "./components/EditTournament";

const App = () => {
  const [tournaments, setTournaments] = useState([]);

  const addTournament = (tournament) => {
    setTournaments([...tournaments, tournament]);
  };

  const updateTournament = (id, name) => {
    setTournaments(tournaments.map((t) => (t.id === id ? { ...t, name } : t)));
  };

  const deleteTournament = (id) => {
    if (window.confirm("Are you sure you want to delete this tournament?")) {
      setTournaments(tournaments.filter((t) => t.id !== id));
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/create">Create Tournament</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TournamentList tournaments={tournaments} deleteTournament={deleteTournament} />} />
        <Route path="/create" element={<CreateTournament addTournament={addTournament} />} />
        <Route path="/edit/:id" element={<EditTournament tournaments={tournaments} updateTournament={updateTournament} />} />
      </Routes>
    </Router>
  );
};

export default App;
