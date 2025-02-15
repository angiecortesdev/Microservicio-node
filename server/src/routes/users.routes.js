import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
    res.send('obteniendo usuarios');
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send('obteniendo usuario');
});

router.post('/users', (req, res) => {
    res.send('creando usuario' + id);
});

router.delete('/users/:id', (req, res) => {
    res.send('eliminando usuarios');
});

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send('actualizando usuarios' + id);
});


export default router;