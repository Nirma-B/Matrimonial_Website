import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Stylesheets/AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [profileDetails, setProfileDetails] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  const toggleActivation = (userId, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.user_id === userId ? { ...user, account_status: newStatus } : user
      )
    );

    axios.post('http://localhost:5000/api/update-status', { user_id: userId, account_status: newStatus })
      .then((response) => {
        if (response.data.success) {
          console.log(`User status updated to ${newStatus}`);
        } else {
          throw new Error('Update failed');
        }
      })
      .catch((error) => {
        console.error('Error updating user status:', error);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.user_id === userId ? { ...user, account_status: currentStatus } : user
          )
        );
      });
  };

  const fetchProfileDetails = (user) => {
    Promise.all([
      axios.get(`http://localhost:5000/api/personal-details/${user.user_id}`),
      axios.get(`http://localhost:5000/api/professional-details/${user.user_id}`)
    ])
      .then(([personalResponse, professionalResponse]) => {
        setProfileDetails({
          ...personalResponse.data,
          ...professionalResponse.data,
          dob: user.dob,
          email: user.email,
          mobile_no: user.mobile_no,
          gender: user.gender,
        });
        setShowProfileModal(true);
      })
      .catch((error) => {
        console.error('Error fetching profile details:', error);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // Formats as DD/MM/YYYY
  };

  return (
    <div className="admin-dashboard-container">
      <div className="main-content">
        <h2>Manage Users</h2>
        <div className="admin-dashboard">
          {users.map((user, index) => (
            <div className="profile-card" key={index}>
              <div className="profile-header">
                <h2>{user.name}</h2>
              </div>
              <div className="profile-content">
                <div className="profile-image">
                  <img src={user.photo_url || 'login_icon.png'} alt="Profile" />
            
                </div>
                <div className="profile-details">
                  <p className="user-name">{user.first_name + ' ' + user.last_name}</p>
                </div>
                <div className="profile-actions">
                  <button
                    className="view-profile"
                    onClick={() => fetchProfileDetails(user)}
                  >
                    View Profile
                  </button>
                  <button
                    className="activate"
                    onClick={() => toggleActivation(user.user_id, user.account_status)}
                  >
                    {user.account_status === 'active' ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Details Modal */}
      {showProfileModal && profileDetails && (
        <div className="modal">
          <div className="modal-content wider-modal">
            <span className="close-btn" onClick={() => setShowProfileModal(false)}>&times;</span><br/><br/>
            <h1 className='profile'>Profile Details</h1>
            <div className="modal-columns">
              {/* Personal Details Section */}
              <div className="modal-column">
                <h3>Personal Details</h3>
                <p><strong>Date of Birth:</strong> {formatDate(profileDetails.dob)}</p>
                <p><strong>Email:</strong> {profileDetails.email}</p>
                <p><strong>Mobile No:</strong> {profileDetails.mobile_no}</p>
                <p><strong>Gender:</strong> {profileDetails.gender}</p>
                <p><strong>Mother Tongue:</strong> {profileDetails.mother_tongue}</p>
                <p><strong>Denomination:</strong> {profileDetails.denomination}</p>
                <p><strong>Marital Status:</strong> {profileDetails.marital_status}</p>
                <p><strong>Height:</strong> {profileDetails.height} cm</p>
                <p><strong>Weight:</strong> {profileDetails.weight} kg</p>
                <p><strong>Residing Country:</strong> {profileDetails.residing_country}</p>
                <p><strong>State:</strong> {profileDetails.state}</p>
                <p><strong>City:</strong> {profileDetails.city}</p>
                <p><strong>Any Disability:</strong> {profileDetails.any_disability}</p>
                <p><strong>Number of Siblings:</strong> {profileDetails.no_of_siblings}</p>
                <p><strong>Family Type:</strong> {profileDetails.family_type}</p>
                <p><strong>About you:</strong> {profileDetails.about_you}</p>
              </div>

              {/* Professional Details Section */}
              <div className="modal-column">
                <h3>Professional Details</h3>
                <p><strong>Employed In:</strong> {profileDetails.employed_in}</p>
                <p><strong>Occupation:</strong> {profileDetails.occupation}</p>
                <p><strong>Higher Education:</strong> {profileDetails.higher_education}</p>
                <p><strong>Annual Income:</strong> ${profileDetails.annual_income}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
