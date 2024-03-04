import React from 'react';

const UserImage = ({ image, onImageChange }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    onImageChange(file);
  };

  return (
    <div className='user-img'>
      <h3>Upload Your Image</h3>
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={URL.createObjectURL(image)} alt="User" />}
    </div>
  );
};

export default UserImage;