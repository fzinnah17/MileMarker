import express from 'express';
import { 
    getAllCustomItems, 
    getCustomItemById, 
    createCustomItem, 
    updateCustomItem, 
    deleteCustomItem,
    getTotalValue
} from '../controllers/customItemController.js';

const router = express.Router();

// Route to get all custom items
router.get('/', getAllCustomItems);

router.get('/total-value', getTotalValue);

// Route to get a single custom item by ID
router.get('/:id', getCustomItemById);

// Route to create a new custom item
router.post('/', createCustomItem);

// Route to update an existing custom item
router.patch('/:id', updateCustomItem);

// Route to delete a custom item
router.delete('/:id', deleteCustomItem);

export default router