const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; //if not port asagin then use 3000

app.use(cors());

app.get('/', (req, res) => {
  res.send('users server is loading.. ');
});

const users = [
  { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
  { id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com' },
  { id: 3, name: 'Sabila noor', email: 'sabila@gmail.com' },
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`users server started on port: ${port} `);
});
