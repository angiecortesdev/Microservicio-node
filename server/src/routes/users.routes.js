import { Router } from 'express';
import { 
    getUsers, 
    getUserById, 
    createUser, 
    deleteUser, 
    updateUser 
} from '../controllers/users.controllers.js';

const router = Router();

router.get('/api/data', getUsers);

router.get('/api/data/:id', getUserById);

router.post('/api/data', createUser);

router.delete('/api/data/:id', deleteUser);

router.put('/api/data/:id', updateUser);


export default router;