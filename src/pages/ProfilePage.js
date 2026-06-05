import React from 'react';

/* Camera icon SVG */
const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="13"
      r="4"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Placeholder avatar with initials */
const AvatarPlaceholder = ({ initials }) => (
  <div
    style={{
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #9b59b6, #6c25be)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '22px',
      fontWeight: '600',
      letterSpacing: '1px',
      flexShrink: 0,
    }}
  >
    {initials}
  </div>
);

const ProfilePage = () => {
  return (
    <div className="page settings-page animate-fade-in">
      {/* Header */}
      <div className="settings-header">
        <h2>Account Settings</h2>

        <div className="profile-section">
          {/* Avatar */}
          <div className="avatar-wrap">
            <AvatarPlaceholder initials="MD" />
            <div className="avatar-badge">
              <CameraIcon />
            </div>
          </div>

          {/* Name & Email */}
          <div className="profile-info">
            <div className="profile-name">Marry Doe</div>
            <div className="profile-email">Marry@Gmail.Com</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="settings-body">
        <p className="settings-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, nostrud exercitation ullamco laboris nisi aliquip.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
