import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomItemById, deleteCustomItem, getTotalValue } from '../services/CustomItemsAPI.js'; // Import getTotalValue

const MilestoneDetails = () => {
    const [item, setItem] = useState(null);
    const [totalValue, setTotalValue] = useState(null); // State to hold total value
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItemAndTotalValue = async () => {
            try {
                const fetchedItem = await getCustomItemById(id);
                setItem(fetchedItem);

                const fetchedTotalValue = await getTotalValue(); // Fetch total value
                setTotalValue(fetchedTotalValue); // Set total value in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchItemAndTotalValue(); // Call the new function
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteCustomItem(id);
            navigate('/');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    if (!item || totalValue === null) return 'Loading...';

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Value: {item.value}</p>
            <p>Total Value of All Features: {totalValue}</p>
            <p>Start Date: {new Date(item.start_date).toLocaleDateString()}</p>
            <p>End Date: {item.end_date ? new Date(item.end_date).toLocaleDateString() : 'Ongoing'}</p>
            <p>Created At: {new Date(item.created_at).toLocaleDateString()}</p>
            <p>Updated At: {new Date(item.updated_at).toLocaleDateString()}</p>
            <p>Public: {item.is_public ? 'Yes' : 'No'}</p>
            <button onClick={() => navigate(`/edit-milestone/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );

};

export default MilestoneDetails;
