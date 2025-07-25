import React from 'react';

function GroupCard({ name, members }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{members} members</p>
        <button className="btn btn-outline-primary mt-auto">View Group</button>
      </div>
    </div>
  );
}

export default GroupCard;
