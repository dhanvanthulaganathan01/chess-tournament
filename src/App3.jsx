import React, { useState } from "react";

const TournamentForm = ({ onSave }) => {
  const [tournament, setTournament] = useState({
    title: "",
    organizer: "",
    startDate: "",
    endDate: "",
    level: "",
    registrationFee: "",
    fideRated: "No",
    tournamentLevel: "",
    maleAgeCategory: "",
    femaleAgeCategory: "",
    registrationDeadline: "",
    chiefArbiter: "",
    directorName: "",
    registrationFees: "",
    numRounds: "",
    timeControl: "Rapid",
    duration: "",
    increment: "",
    tournamentType: "Swiss-System",
    nationalApproval: "",
    stateApproval: "",
    districtApproval: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
    alternateContact: "",
    maleTrophies: "",
    femaleTrophies: "",
    cashPrize: "",
    country: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    venueAddress: "",
    nearestLandmark: "",
    brochure: null,
    chessBoardProvided: "No",
    timerProvided: "No",
    parkingFacility: "Parking Not Available",
    canteenFacility: [],
  });

  const handleChange = (e) => {
    setTournament({ ...tournament, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(tournament);
    setTournament({ title: "", organizer: "", startDate: "", endDate: "", level: "", registrationFee: "" });
  };

return (
    
    <form onSubmit={handleSubmit}>
    <label >Tournament title</label>
  
    <input name="title" className="file" value={tournament.title} onChange={handleChange} placeholder="Tournament Title" required />   
    
    <label >Organizer</label>
    <input name="organizer" className="file" value={tournament.organizer} onChange={handleChange} placeholder="Organizer Name" required />      
  
    <p className="line">Start Data  and End Date</p>
    <input className='file3' name="startDate" type="date" className="file3"  value={tournament.startDate} onChange={handleChange} required />

    
  
    <input className='file3' name="endDate" type="date"className="file3" value={tournament.endDate} onChange={handleChange} required />
    

    <div className="input-box">
    <label>tournamentLevel</label>
    <input name="level" className="file" value={tournament.level} onChange={handleChange} placeholder="Tournament Level" required />
    </div>

    <div className="input-box">
    <label>Registration</label>
    <input name="registrationFee" type="number" className="file" value={tournament.registrationFee} onChange={handleChange} placeholder="Registration Fee" required />  
    </div>
  
    <h2 className="text-xl font-bold mt-6">Contact Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="contactPerson"
            placeholder="Contact Person Name"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email ID"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="contactNumber"
            placeholder="Contact Number"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="alternateContact"
            placeholder="Alternate Contact"
            className="border p-2"
            onChange={handleChange}
          />
        </div>
        <h2 className="text-xl font-bold mt-6">Prize Details</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            name="maleTrophies"
            placeholder="Trophies for Male"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="femaleTrophies"
            placeholder="Trophies for Female"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="cashPrize"
            placeholder="Total Cash Prize"
            className="border p-2"
            onChange={handleChange}
          />
        </div>

        <h2 className="text-xl font-bold mt-6">Tournament Venue Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="country"
            placeholder="Country"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="state"
            placeholder="State"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="district"
            placeholder="District"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="city"
            placeholder="City"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="pincode"
            placeholder="Pincode"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="venueAddress"
            placeholder="Venue Address"
            className="border p-2"
            onChange={handleChange}
          />
          <input
            name="nearestLandmark"
            placeholder="Nearest Landmark"
            className="border p-2"
            onChange={handleChange}
          />
        </div>


        <h2 className="text-xl font-bold mt-6">Others</h2>
        <div className="flex gap-4 mt-2">
          <label>
            <p>Chess Board Provided:</p>
            
            <input className="dote"
              type="radio"
              name="chessBoardProvided"
              value="Yes"
              onChange={handleChange}
            />{" "}
           <label>yes</label>
            <input className="dote"
              type="radio"
              name="chessBoardProvided"
              value="No"
              onChange={handleChange}
              
            />{" "}
       <label>no</label>
          </label>
          <label>
          <p> Timer Provided:</p>
            
            <input className="dote"
              type="radio"
              name="timerProvided"
              value="Yes"
              onChange={handleChange}
            />{" "}
            <label>yes</label>
            <input className="dote"
              type="radio"
              name="timerProvided"
              value="No"
              onChange={handleChange}
            />{true}
          <label>no</label>
          </label>
        </div>
          <br></br>
        <div className="mt-4">
          <label>Parking Facility:</label>
          <select
            name="parkingFacility"
            className="border p-2 ml-2"
            onChange={handleChange}
          >
            <option value="Parking Not Available">Parking Not Available</option>
            <option value="2 Wheeler Only">2 Wheeler Only</option>
            <option value="2 & 4 Wheeler">2 & 4 Wheeler</option>
          </select>
        </div>



        <div className="mt-4">
          
          <label>Canteen Facility:</label>
          <div className="flex gap-4">
            <label>
              <input
                type="checkbox"
                name="canteenFacility"
                value="Breakfast"
                onChange={handleChange}
              />{" "}
              Breakfast
            </label>
            <label>
              <input
                type="checkbox"
                name="canteenFacility"
                value="Lunch"
                onChange={handleChange}
              />{" "}
              Lunch
            </label>
            <label>
              <input
                type="checkbox"
                name="canteenFacility"
                value="Dinner"
                onChange={handleChange}
              />{" "}
              Dinner
            </label>
            <label>
              <input
                type="checkbox"
                name="canteenFacility"
                value="Snacks"
                onChange={handleChange}
              />{" "}
              Snacks
            </label>
            <label>
              <input
                type="checkbox"
                name="canteenFacility"
                value="Beverages"
                onChange={handleChange}
              />{" "}
              Beverages
            </label>
          </div>
        </div>

    <button className="submit" type="submit">Add Tournament</button>
    
    
    
    </form>
  );
};

const TournamentList = ({ tournaments, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Organizer</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Level</th>
          <th>Registration Fee</th>
          <th>Actions</th>
        </tr>
        

      </thead>
      <tbody>
        {tournaments.map((tournament, index) => (
          <tr key={index}>
            <td>{tournament.title}</td>
            <td>{tournament.organizer}</td>
            <td>{tournament.startDate}</td>
            <td>{tournament.endDate}</td>
            <td>{tournament.level}</td>
            <td>{tournament.registrationFee}</td>
            
              <button className="ebutton" onClick={() => onEdit(index)}>Edit</button> <button className="dbutton" onClick={() => onDelete(index)}>Delete</button>
              <br></br>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App3 = () => {
  const [tournaments, setTournaments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = (tournament) => {
    if (editIndex !== null) {
      const updatedTournaments = [...tournaments];
      updatedTournaments[editIndex] = tournament;
      setTournaments(updatedTournaments);
      setEditIndex(null);
    } else {
      setTournaments([...tournaments, tournament]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTournaments(tournaments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Tournament Management</h1>
      <TournamentForm onSave={handleSave} />
      <TournamentList tournaments={tournaments} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App3;