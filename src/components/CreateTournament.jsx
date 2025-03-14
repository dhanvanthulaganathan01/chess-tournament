import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const CreateTournament = ({ addTournament }) => {
const [name, setName] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    addTournament({ id: Date.now(), name });
    navigate("/");
};

return (
    <div>
    <h2>Create Tournament</h2>
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tournament Name" required />
{/* 
        <input type="checkbox" name="canteenFacility" value="Beverages" onChange={handleChange} /> Beverages
            </label> */}
<br></br>
        <div className="flex justify-between mt-6">
        <button type="button" className="bg-gray-400 px-4 py-2 text-white rounded">Save Draft</button>
        <button type="submit" className="bg-blue-600 px-4 py-2 text-white rounded">Submit</button>
        </div>

<br></br>
    </form>
    </div>
);
};

export default CreateTournament;
