const db = require('../db'); 
// Fetch all users
exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM user_basics', (err, results) => {
      if (err) return res.status(500).send('Database query failed');
      res.json(results);
    });
  };
  
  // Fetch professional details for a user
  exports.getProfessionalDetails = (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM user_professional_details WHERE user_id = ?', [userId], (err, results) => {
      if (err) return res.status(500).send('Database query failed');
      res.json(results[0]);
    });
  };
  
  // Fetch personal details for a user
  exports.getPersonalDetails = (req, res) => {
    const userId = req.params.userId;
    db.query('SELECT * FROM user_personal_details WHERE user_id = ?', [userId], (err, results) => {
      if (err) return res.status(500).send('Database query failed');
      res.json(results[0]);
    });
  };
  