import React from 'react';
import { useNavigate } from 'react-router-dom';

const InputField = ({ type, name, value, onChange, label }) => (
  <div className="input-field">
    <label>
      {label}:
      {type === 'checkbox' ? (
        <input type={type} name={name} checked={value} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value || ''} onChange={onChange} />
      )}
    </label>
    <br />
  </div>
);

const AddCustomItem = ({ itemData, handleInputChange, handleSubmit, selectedIcon, disabledCategories = [] }) => {
  const navigate = useNavigate();

  const submitAndNavigate = async (e) => {
    await handleSubmit(e);
    navigate('/'); // navigating to the homepage after submitting
  };

  // Manually specify the category options based on the new mock data
  const categoryOptions = [
    "--Select--",
    "Dress Watches",
    "Diving Watches",
    "Fitness Watches",
    "Mechanical Watches",
    "Luxury Watches",
    "Smartwatches",
    "Women's Watches",
    "Military Watches",
    "Aviator Watches",
    "Wooden Watches",
  ];

  return (
    <div className="form-container">
      <form onSubmit={submitAndNavigate}>
        <label>
          Category:
          <select name="category" onChange={handleInputChange} value={itemData.category}>
            {categoryOptions.map((category, index) => (
              <option key={index} value={category} disabled={disabledCategories.includes(category)}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <span>{selectedIcon}</span>
        <br />

        <InputField
          type="text"
          name="title"
          value={itemData.title}
          onChange={handleInputChange}
          label="Title"
        />
        <InputField
          type="text"
          name="description"
          value={itemData.description}
          onChange={handleInputChange}
          label="Description"
        />
        <InputField
          type="date"
          name="start_date"
          value={itemData.start_date}
          onChange={handleInputChange}
          label="Start Date"
        />
        <InputField
          type="date"
          name="end_date"
          value={itemData.end_date}
          onChange={handleInputChange}
          label="End Date"
        />
        <InputField
          type="text"
          name="icon"
          value={itemData.icon}
          onChange={handleInputChange}
          label="Icon"
        />
        <InputField
          type="number" // Use type "number" to accept integers
          name="value"
          value={itemData.value}
          onChange={handleInputChange}
          label="Value"
        />

        <button type="submit">Create Custom Item</button>
      </form>
    </div>
  );
};

export default AddCustomItem;
