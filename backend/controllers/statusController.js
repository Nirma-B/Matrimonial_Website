const db = require('../db'); 

// Update user account status
exports.updateStatus = (req, res) => {
    const { user_id, account_status } = req.body;
    const sql = `UPDATE user_basics SET account_status = ? WHERE user_id = ?`;
  
    db.query(sql, [account_status, user_id], (err) => {
      if (err) {
        console.error('Error updating user status:', err);
        return res.status(500).json({ message: 'Failed to update status' });
      }
      res.json({ success: true, message: 'User status updated successfully' });
    });
  };
  