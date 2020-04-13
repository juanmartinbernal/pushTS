const Pool = require('pg').Pool;


//create database connection
const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'sapadm123',
  port: 5432,
};
const pool = new Pool(connectionData);

//connect to database
pool.connect((err) => {
  if (err) throw err;
  console.log('pg Connected...');
});

module.exports = {pool}