CREATE TABLE usuarios (
 id SERIAL PRIMARY KEY,
 nombre VARCHAR(100) NOT NULL,
 correo VARCHAR(100) NOT NULL UNIQUE,
 edad INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, correo, edad) VALUES ('Angie', 'acortes@g.co', 25);

SELECT * FROM usuarios;