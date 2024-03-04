import React from 'react';

const UserBio = ({ bio, onBioChange }) => {
  const handleBioChange = (event) => {
    onBioChange(event.target.value);
  };

  return (
    <div>
      <h3>User Bio</h3>
      <textarea value={bio} onChange={handleBioChange} />
    </div>
  );
};

export default UserBio;