import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notification = ({ showNotification, onClose }) => {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <div>
      <Snackbar
        open={showNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          icon={false}
          onClose={handleClose}
          sx={{
            color: '#2f2f31',
            width: '100%',
            background: '#e4bb7c',
          }}
        >
          You have already entered this letter!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;
