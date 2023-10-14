import { pool } from '../config/database.js';

// Get all custom items
export const getAllCustomItems = async (req, res) => {
    try {
        console.log("About to execute the query");
        const result = await pool.query('SELECT * FROM custom_items');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const getTotalValue = async (req, res) => {
    try {
        const result = await pool.query('SELECT SUM(value) FROM custom_items');
      res.status(200).json({ totalValue: result.rows[0].sum });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Get a single custom item by id
export const getCustomItemById = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
        const result = await pool.query('SELECT * FROM custom_items WHERE id = $1', [id]);

        if (result.rows.length) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: "CustomItem not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new custom item
export const createCustomItem = async (req, res) => {
    const { category, title, description, start_date, end_date, icon, is_public, value } = req.body;

    if (!title || !description || !category || value == null) {
        return res.status(400).json({ error: "Title, description, category, and value are required!" });
    }

    try {
        const result = await pool.query(
            'INSERT INTO custom_items (category, title, description, start_date, end_date, icon, created_at, updated_at, is_public, value) VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW(), $7, $8) RETURNING *',
            [category, title, description, start_date, end_date, icon, is_public, value]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update an existing custom item
export const updateCustomItem = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { category, title, description, start_date, end_date, icon } = req.body;

    try {
        const result = await pool.query(
            'UPDATE custom_items SET category = $1, title = $2, description = $3, start_date = $4, end_date = $5, icon = $6, updated_at = NOW() WHERE id = $7 RETURNING *',
            [category, title, description, start_date, end_date, icon, id]
        );

        if (result.rows.length) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: "CustomItem not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a custom item
export const deleteCustomItem = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
        const result = await pool.query('DELETE FROM custom_items WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length) {
            res.status(200).json({ message: "CustomItem deleted successfully" });
        } else {
            res.status(404).json({ message: "CustomItem not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  


