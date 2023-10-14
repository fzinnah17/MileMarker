import React, { useState } from 'react';
import { createCustomItem } from '../services/CustomItemsAPI.js';
import AddCustomItem from '../components/AddCustomItem.jsx';
import "../css/CreateMileStone.css";

const CreateMileStone = () => {
    const [itemData, setItemData] = useState({
        category: '',
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        icon: '',
        value: '',
    });
    const [selectedIcon, setSelectedIcon] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [disabledCategories, setDisabledCategories] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!itemData.title || !itemData.description || !itemData.category) {
            setErrorMessage("Please fill in the title, description, and category!");
            return;
        }

        if (itemData.category === "Dress Watches" && !itemData.title.startsWith("Classic")) {
            setErrorMessage("For 'Dress Watches' category, the title must start with 'Classic'");
            return;
        }

        try {
            const newItem = await createCustomItem(itemData);
            console.log(newItem);
            setErrorMessage("");
        } catch (error) {
            console.error("There was an error creating the item!", error);
            setErrorMessage("There was an error creating the item!");
        }
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setItemData({ ...itemData, category: category });

        let icon;
        let disabled;

        switch (category) {
            case "Dress Watches":
                icon = "👔";
                disabled = ["Dress Watches", "Diving Watches", "Fitness Watches", "Mechanical Watches", "Luxury Watches", "Smartwatches", "Women's Watches", "Military Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Diving Watches":
                icon = "🌊";
                disabled = ["Diving Watches", "Dress Watches", "Fitness Watches", "Mechanical Watches", "Luxury Watches", "Smartwatches", "Women's Watches", "Military Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Fitness Watches":
                icon = "🏋️";
                disabled = ["Fitness Watches", "Dress Watches", "Diving Watches", "Mechanical Watches", "Luxury Watches", "Smartwatches", "Women's Watches", "Military Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Mechanical Watches":
                icon = "⚙️";
                disabled = ["Mechanical Watches", "Dress Watches", "Diving Watches", "Fitness Watches", "Luxury Watches", "Smartwatches", "Women's Watches", "Military Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Luxury Watches":
                icon = "💎";
                disabled = ["Luxury Watches", "Dress Watches", "Diving Watches", "Fitness Watches", "Mechanical Watches", "Smartwatches", "Women's Watches", "Military Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Smartwatches":
                icon = "📱";
                disabled = ["Smartwatches", "Dress Watches", "Diving Watches", "Fitness Watches", "Mechanical Watches", "Luxury Watches", "Women's Watches", "Military Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Women's Watches":
                icon = "👩";
                disabled = ["Women's Watches", "Dress Watches", "Diving Watches", "Fitness Watches", "Mechanical Watches", "Luxury Watches", "Smartwatches", "Military Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Military Watches":
                icon = "✈️";
                disabled = ["Military Watches", "Dress Watches", "Diving Watches", "Fitness Watches", "Mechanical Watches", "Luxury Watches", "Smartwatches", "Women's Watches", "Aviator Watches", "Wooden Watches"];
                break;
            case "Aviator Watches":
                icon = "🛩️";
                disabled = ["Aviator Watches", "Dress Watches", "Diving Watches", "Fitness Watches", "Mechanical Watches", "Luxury Watches", "Smartwatches", "Women's Watches", "Military Watches", "Wooden Watches"];
                break;
            case "Wooden Watches":
                icon = "🌳";
                disabled = ["Wooden Watches", "Dress Watches", "Diving Watches", "Fitness Watches", "Mechanical Watches", "Luxury Watches", "Smartwatches", "Women's Watches", "Military Watches", "Aviator Watches"];
                break;
            default:
                icon = "";
                disabled = [];
        }
        setSelectedIcon(icon);
        setDisabledCategories(disabled);
    };

    return (
        <div className="create-milestone-container">
            <h1>Create a New Milestone</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <AddCustomItem 
                itemData={itemData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleCategoryChange={handleCategoryChange}
                selectedIcon={selectedIcon}
                disabledCategories={disabledCategories}
                isEditMode={false}
            />
        </div>
    );
};

export default CreateMileStone;
