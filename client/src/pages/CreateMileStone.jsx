import React, { useState } from 'react';
import { createCustomItem } from '../services/CustomItemsAPI.js';
import AddCustomItem from '../components/AddCustomItem.jsx';

const CreateMileStone = () => {
    const [itemData, setItemData] = useState({
        category: '',
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        icon: ''
    });
    const [selectedIcon, setSelectedIcon] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // state for handling error messages

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simplified validation logic
        if (!itemData.title || !itemData.description || !itemData.category) {
            setErrorMessage("Please fill in the title, description, and category!");
            return;
        }

        try {
            const newItem = await createCustomItem(itemData);
            console.log(newItem); // 'newItem' contains the response from API
            setErrorMessage(""); // Clear the error message upon successful creation
        } catch (error) {
            console.error("There was an error creating the item!", error);
            setErrorMessage("There was an error creating the item!");
        }
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setItemData({ ...itemData, category: category });

        // Simple logic to select icon based on category
        let icon;
        switch(category) {
            case "education":
                icon = "🎓";
                break;
            case "family":
                icon = "👨‍👩‍👧";
                break;
            case "self-care":
                icon = "❤️";
                break;
            case "career":
                icon = "💼";
                break;
            default:
                icon = "";
        }
        setSelectedIcon(icon);
    };

    return (
        <div>
            <h1>Create a New Milestone</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message when it's set */}
            <AddCustomItem 
                itemData={itemData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleCategoryChange={handleCategoryChange}
                selectedIcon={selectedIcon}
                isEditMode={false}
            />
        </div>
    );
};

export default CreateMileStone;
