import React from "react";
import { Link } from "react-router-dom";

const TournamentList = ({ tournaments, deleteTournament }) => {
  return (
    <div>
      <h2>Tournament List</h2>
      <Link to="/create">Create Tournament</Link>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
          
            <Link to={`/edit/${tournament.id}`}><button>Edit</button></Link>
            {tournament.name}
            <button onClick={() => deleteTournament(tournament.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentList;
