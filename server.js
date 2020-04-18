const express = require('express');
const { config } = require('dotenv');
const app = express();
const dbConfig = require('./config/dbConfig');
dbConfig();
config(); //set up dotenv
const port = process.env.PORT || 8080;
app.use(express.json({ extended: true}));
/*******
 *  *** Routes
 */
const authRoute = require('./routes/api/authRoute');
const profilesRoute = require('./routes/api/profilesRoute');
const postsRoute = require('./routes/api/postsRoute');
app.use('/api', authRoute);
app.use('/api/profiles', profilesRoute);
app.use('/api/posts', postsRoute);

app.use('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to Educatus MERN app'});
});

app.listen(port, () => console.log(`Educatus::server running on ${port}`));