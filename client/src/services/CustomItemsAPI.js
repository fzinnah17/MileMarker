import axios from 'axios';

const API_URL = '/api/custom-items';

export const getAllCustomItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        // Handle error
        console.error("Error fetching data: ", error);
        throw error;
    }
};

export const getTotalValue = async () => {
    try {
        const response = await axios.get(`${API_URL}/total-value`);
        return response.data.totalValue;
    } catch (error) {
        console.error("Error fetching total value: ", error);
        throw error;
    }
};

export const getCustomItemById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching item with id ${id}: `, error);
        throw error;
    }
};

export const createCustomItem = async (customItem) => {
    try {
        const response = await axios.post(API_URL, customItem);
        return response.data;
    } catch (error) {
        console.error("Error creating item: ", error);
        throw error;
    }
};

export const updateCustomItem = async (id, updatedData) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Error updating item with id ${id}: `, error);
        throw error;
    }
};

export const deleteCustomItem = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting item with id ${id}: `, error);
        throw error;
    }
};

