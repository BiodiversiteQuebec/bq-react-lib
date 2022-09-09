import React, { useEffect, useState, useRef } from 'react';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { colors } from '../styles';

export default function BQModal(props: any) {
  const { modalContent, modalWidth } = props;
  const [thisModalContent, setThisModalContent] = useState(<></>);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const showModal = () => {
    setOpen(true);
  };
  return (
    <Typography
      style={{
        marginLeft: 'auto',
        padding: '4px',
      }}
    >
      <SettingsOverscanIcon
        onClick={showModal}
        sx={{ cursor: 'pointer', color: colors.darkgray }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ width: modalWidth, height: '90vh', margin: 'auto' }}
      >
        {modalContent}
      </Modal>
    </Typography>
  );
}
