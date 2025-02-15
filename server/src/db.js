import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin1234',
    database: 'nodeexpress',
    port: '5432'
});

