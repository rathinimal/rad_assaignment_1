import React from "react";
import pic from "./images/team.png";
import "./Team.css"; 

const teamMembers = [
  {
    name: "Kamal ",
    position: "CEO",
    image: pic, 
  },
  {
    name: "Vimal",
    position: "CTO",
    image: pic, 
  },
  {
    name: "Siva",
    position: "CFO",
    image: pic,
  },
  {
    name: "Namasi",
    position: "COO",
    image: pic, 
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member p-0" key={index}>
            <div>
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
