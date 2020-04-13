import express = require('express');
import bodyParser = require('body-parser');
const pool = require('./config').pool;

const app = express();
// parse application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//show all products
const getAllCustomers = (req, res) => {
  let sql = 'SELECT * FROM customers';
  let query = pool.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
    //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
};

//show single product
const getCustomerByID = (req, res) => {
  let sql = 'SELECT * FROM customers WHERE id=' + req.params.id;
  let query = pool.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
    //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
};

//add new product
const addCustomer = (req, res) => {
  const { id, name, message, device_id, date_notification } = req.body;
  let query = pool.query(
    'INSERT INTO customers (id, name, message, device_id, date_notification) VALUES ($1, $2, $3, $4, $5)',
    [id, name, message, device_id, date_notification],
    (err, results) => {
      if (err) throw err;
      //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      res.status(200).json(results.rows);
    }
  );
};

//update product
const updateCustomer = (req, res) => {
  let sql =
    "UPDATE customers SET device_id='" +
    req.body.device_id +
    "' WHERE id=" +
    req.params.id;
  let query = pool.query(sql, (err, results) => {
    if (err) throw err;
    //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.status(200).json(results.rows);
  });
};

//Delete product
const deleteCustomer = (req, res) => {
  let sql = 'DELETE FROM customers WHERE id=' + req.params.id + '';
  let query = pool.query(sql, (err, results) => {
    if (err) throw err;
    //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.status(200).json(results.rows);
  });
};

app.get('/api/customers', getAllCustomers);
app.get('/api/customers/:id', getCustomerByID);
app.post('/api/customers', addCustomer);
app.put('/api/customers/:id', updateCustomer);
app.delete('/api/customers/:id', deleteCustomer);

//Server listening
app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
