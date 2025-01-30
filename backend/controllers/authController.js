const jwt = require('jsonwebtoken');
const db = require('../db'); // Assuming db connection is in a separate file

// Login handler
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const adminQuery = 'SELECT * FROM admin_login WHERE username = ?';
  db.query(adminQuery, [email], (err, adminResults) => {
    if (err) {
      return res.status(500).json({ message: 'Database query error' });
    }

    if (adminResults.length > 0) {
      const admin = adminResults[0];

      if (password !== admin.password) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign(
        { id: admin.id, username: admin.username, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      return res.status(200).json({ token, redirectTo: '/admin-dashboard' });
    }

    const userQuery = 'SELECT * FROM user_basics WHERE email = ?';
    db.query(userQuery, [email], (err, userResults) => {
      if (err) {
        return res.status(500).json({ message: 'Database query error' });
      }

      if (userResults.length === 0) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const user = userResults[0];

      if (user.account_status === 'inactive') {
        return res.status(403).json({ message: 'Your account is inactive. Please contact support.' });
      }

      if (password !== user.password) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign(
        { id: user.user_id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      return res.status(200).json({ token, redirectTo: '/user-dashboard' });
    });
  });
};
