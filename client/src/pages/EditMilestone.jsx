import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomItemById, updateCustomItem } from '../services/CustomItemsAPI.js';
import AddCustomItem from '../components/AddCustomItem.jsx';
import "../css/EditMilestone.css"

const EditMilestone = () => {
    const [itemData, setItemData] = useState(null);
    const [isUpdateSuccessful, setUpdateSuccessful] = useState(false); // State to track successful update
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const item = await getCustomItemById(id);
                setItemData(item);
            } catch (error) {
                console.error('Failed to fetch item:', error);
            }
        };

        fetchItem();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateCustomItem(id, itemData);
            setUpdateSuccessful(true); // Set update successful to true when update is successful

            // Show the success message for 3 seconds, then redirect to the homepage
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    // Render loading text if item data hasn't been fetched yet
    if (!itemData) return 'Loading...';

    return (
        <div className="edit-milestone-container">
            <h1>Edit Milestone</h1>
            <AddCustomItem 
                itemData={itemData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isEditMode={true}
            />
            {/* Show success message when update is successful */}
            {isUpdateSuccessful && <p>Update was successful!</p>}
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    );
};

export default EditMilestone;
