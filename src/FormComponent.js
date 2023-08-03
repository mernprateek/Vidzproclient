import React, { useState } from 'react';

const FormComponent = ({ addItem }) => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  // Function to handle input changes and update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    // Reset the form fields after submission
    setFormData({
      name: '',
      description: '',
      price: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter the item name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter the item description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter the item price"
          />
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default FormComponent;
