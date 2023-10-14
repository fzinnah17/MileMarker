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

const AddCustomItem = ({ itemData, handleInputChange, handleSubmit, handleCategoryChange, selectedIcon }) => {
  const navigate = useNavigate();

  const submitAndNavigate = async (e) => {
    await handleSubmit(e);
    navigate('/'); // navigating to the homepage after submitting
  };

  return (
    <div className="form-container">
            <form onSubmit={submitAndNavigate}>
        <label>
          Category:
          <select name="category" onChange={handleCategoryChange} value={itemData.category}>
              <option value="">--Select--</option> {/* It's good practice to have a default option */}
              <option value="education">Education</option>
              <option value="family">Family</option>
              <option value="self-care">Self-Care</option>
              <option value="career">Career</option>
          </select>
        </label>
        <span>{selectedIcon}</span>
        <br />

        <InputField
          type="text"
          name="category"
          value={itemData.category}
          onChange={handleInputChange}
          label="Category"
        />
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
        <button type="submit">Create Custom Item</button>
      </form>
    </div>
  );
};

export default AddCustomItem;
