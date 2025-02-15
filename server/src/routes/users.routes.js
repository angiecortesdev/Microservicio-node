import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/api/users', async(req, res) => {
    const {rows} = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
});

router.get('/api/users/:id', async(req, res) => {
    const { id } = req.params;
    const {rows} = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (rows.length === 0) {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    res.json(rows[0]);
});

router.post('/api/users', async(req, res) => {
    const { nombre, correo, edad } = req.body;
    const {rows} = await pool.query('INSERT INTO usuarios (nombre, correo, edad) VALUES ($1, $2, $3) RETURNING *', [nombre, correo, edad]);
    res.json(rows[0]);
});

router.delete('/api/users/:id', async(req, res) => {
    const { id } = req.params;
    const { rowCount} = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
    if (rowCount === 0) {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    return res.sendStatus(204);
});

router.put('/api/users/:id', async(req, res) => {
    const { id } = req.params;
    const { nombre, correo, edad } = req.body;
    const {rows} = await pool.query('UPDATE usuarios SET nombre = $1, correo = $2, edad = $3 WHERE id = $4 RETURNING *', [nombre, correo, edad, id]);
    res.json(rows[0]);
});


export default router;