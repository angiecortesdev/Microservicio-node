import { pool } from '../db.js';

export const getUsers = async(req, res) => {
    const {rows} = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
}

export const getUserById = async(req, res) => {
    const { id } = req.params;
    const {rows} = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (rows.length === 0) {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    res.json(rows[0]);
}


export const createUser = async(req, res) => {
    try {
        const { nombre, correo, edad } = req.body;
        const {rows} = await pool.query('INSERT INTO usuarios (nombre, correo, edad) VALUES ($1, $2, $3) RETURNING *', [nombre, correo, edad]);
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(400).json(error);
        if(error?.code === '23505') {
            return res.status(409).json({message: 'El correo ya existe'});
        }
        return res.status(500).json({message: 'Error interno del servidor'});
    }
}

export const deleteUser = async(req, res) => {
    const { id } = req.params;
    const { rowCount} = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
    if (rowCount === 0) {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    return res.sendStatus(204);
}

export const updateUser = async(req, res) => {
    const { id } = req.params;
    const { nombre, correo, edad } = req.body;
    const {rows} = await pool.query('UPDATE usuarios SET nombre = $1, correo = $2, edad = $3 WHERE id = $4 RETURNING *', [nombre, correo, edad, id]);
    res.json(rows[0]);
}