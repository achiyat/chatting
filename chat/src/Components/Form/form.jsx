import React, { useState } from "react";
import profile from "../../img/profile-picture.jpg";
import "./form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    PhoneNumber: "",
    FirstName: "",
    LastName: "",
    FullName: "",
    Img: profile, // Set the default image to the profile picture
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      FullName: `${formData.FirstName} ${formData.LastName}`, // Combine first and last names for FullName
    });
  };

  const handlePhotoChange = (e) => {
    const photoFile = e.target.files[0];
    setFormData({
      ...formData,
      Img: URL.createObjectURL(photoFile), // Use uploaded image or profile picture
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform actions with the formData here, like sending it to a server.

    // For now, let's just log the data.
    console.log(formData);
  };

  return (
    <div className="form">
      <h1>Welcome to our chat</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="PhoneNumber">Phone Number:</label>
          <input
            type="text"
            id="PhoneNumber"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Img">Photo:</label>
          <input type="file" id="Img" name="Img" onChange={handlePhotoChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
