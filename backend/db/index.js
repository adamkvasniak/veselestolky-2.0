const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'produkty-veselestolky.c7trmbxivoxg.eu-north-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'bzwhbzwh',
    port: 5432
  });

const query = async (text, params = []) => {
    try {
        return await pool.query(text, params)
    } catch (err) {
        console.log(err)
        return {rows: []};
    }
}

exports.query = query;
exports.pool = pool;
