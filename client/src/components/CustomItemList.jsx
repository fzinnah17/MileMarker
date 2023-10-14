import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCustomItems } from '../services/CustomItemsAPI.js';
import "../css/CustomItemList.css"

const CustomItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                let fetchedItems = await getAllCustomItems();
                // Sort items by 'id' in ascending order
                fetchedItems = fetchedItems.sort((a, b) => a.id - b.id);
                setItems(fetchedItems);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };


        fetchItems();
    }, []);

    return (
        <div className="custom-item-list-container">
            <h1>BUY WATCHES</h1>
            <Link to="/create-milestone" className="create-milestone-button">
                <span>+</span> ADD MORE WATCHES
            </Link>
            {items.length === 0 ? (
                <p>No milestones found!</p>
            ) : (
                <ul className="custom-item-list">
                    {items.map((item) => (
                        <li key={item.id}>
                            <Link to={`/milestone/${item.id}`}>
                                <h3>{item.title}</h3> {/* Only display the title */}
                            </Link>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
};

export default CustomItemList;
