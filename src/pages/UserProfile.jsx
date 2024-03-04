import React, { useState } from 'react';
import UserImage from '../components/UserImage';
import UserBio from '../components/UserBio';

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState('');

  const handleImageChange = (imageFile) => {  setImage(imageFile) };
  const handleBioChange = (newBio) => { setBio(newBio)  };

  return (
    <div className='profile'>
      <h1>User Profile</h1>
      <UserImage image={image} onImageChange={handleImageChange} />
      <UserBio bio={bio} onBioChange={handleBioChange} />
   </div>
  );
};

export default UserProfile;