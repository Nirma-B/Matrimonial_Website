const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const statusController = require('./controllers/statusController');
const storiesRouter = require('./controllers/storiesController'); 


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(storiesRouter);

require('dotenv').config();

// Routes
app.post('/login', authController.login);
app.get('/api/users', userController.getAllUsers);
app.get('/api/professional-details/:userId', userController.getProfessionalDetails);
app.get('/api/personal-details/:userId', userController.getPersonalDetails);
app.post('/api/update-status', statusController.updateStatus);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
