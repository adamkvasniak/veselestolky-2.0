const express = require('express');
const {query} = require("./db/index");
const cors = require("cors")
const path = require('path');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;



// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));
// SERVER 
app.get('/api/records', async (req, res) => {
  console.log(req.body)
  try {
    const {rows} = await query('SELECT * FROM produkty');
    res.send(rows);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({"Skap":"zmrde"});
  }
});

app.post('/hello', async (req, res) => {
  try {
    const { name, email,message,phone} = req.body;
    const result = await query(
    `INSERT INTO "user_interactions" (customer_name, phone, email, bonus_info) VALUES ('${name}', '${phone}', '${email}','${message}');`
    );
    // const insertedId = result.rows[0].id;
    res.status(200).json({ message: 'Form data stored successfully', insertedId });
  } catch (error) {
    console.error('Error storing form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
