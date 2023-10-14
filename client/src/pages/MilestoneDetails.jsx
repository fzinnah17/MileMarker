import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomItemById, deleteCustomItem } from '../services/CustomItemsAPI.js';

const MilestoneDetails = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const fetchedItem = await getCustomItemById(id);
                setItem(fetchedItem);
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteCustomItem(id);
            navigate('/');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    if (!item) return 'Loading...';

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
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
