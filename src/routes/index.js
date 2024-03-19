import { Router } from 'express';
import { getAllItems, newItem } from '../controller/EmpleoController.js';

const router = new Router();

router.get('/api', getAllItems);
router.post('/api', newItem);

export default router;