import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('You are not logged in.');
      return;
    }
    fetch(`https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/auth/user/`, {
      headers: { 'Authorization': `Token ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        console.log('Profile response:', data);
        setProfile(data);
      })
      .catch(() => setError('Failed to fetch profile'));
  }, []);

  if (error) {
    return <div className="alert alert-danger mt-4">{error}</div>;
  }

  if (!profile) {
    return <div className="text-center mt-4">Loading profile...</div>;
  }

  return (
    <div className="card mx-auto mt-4" style={{maxWidth: 400}}>
      <div className="card-body">
        <h2 className="card-title text-info">Profile</h2>
        <table className="table table-bordered">
          <tbody>
            <tr><th>Username</th><td>{profile.username}</td></tr>
            <tr><th>Email</th><td>{profile.email}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
