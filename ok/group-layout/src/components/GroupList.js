import React from 'react';
import GroupCard from './GroupCard';

const groupData = [
  { name: "Nature Lovers", members: 25 },
  { name: "Tech Enthusiasts", members: 42 },
  { name: "React Developers", members: 32 },
  { name: "Design Team", members: 18 },
];

function GroupList() {
  return (
    <div className="row g-4">
      {groupData.map((group, index) => (
        <div className="col-12 col-sm-6 col-lg-3" key={index}>
          <GroupCard name={group.name} members={group.members} />
        </div>
      ))}
    </div>
  );
}

export default GroupList;
