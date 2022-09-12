import React, { useState } from 'react';
import { ImageSlideCardContainerRelative } from '../slideshowstyles';
import analyze from 'rgbaster';
import { NoImageBox } from '../ImageBox';

import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import '../ImageSlideCard/ImageSlideCard.css';

const missingUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/NorthernSawwhetOwl23.jpg/500px-NorthernSawwhetOwl23.jpg';

/**
 *
 * @param props
 */
export const SlideImageView = (props: any) => {
  const { onClick, onModalClose, styleModel, url, alt, open = false } = props;
  const [color, setColor] = useState('rgba(128,128,128,0.3)');

  analyze(url ?? missingUrl, null).then((colors: any) => {
    if (colors.length > 0) {
      setColor(colors[0].color);
    }
  });

  return (
    <ImageSlideCardContainerRelative>
      {url !== undefined ? (
        <div
          style={{
            backgroundColor: color,
          }}
        >
          <img className="testimage" src={url} alt={alt} />
        </div>
      ) : (
        <NoImageBox height="100px" />
      )}
      <div
        style={{
          position: 'absolute',
          bottom: '5px',
          right: '5px',
          width: '100%',
          height: '100%',
        }}
      >
        <IconButton
          onClick={onClick}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        />

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={onModalClose}
          onClick={onModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          style={{ zIndex: 9999999999999 }}
        >
          <Fade in={open}>
            <Box>
              <img
                className="modal-image"
                src={url ?? ''}
                alt={alt ?? 'none'}
                style={styleModel}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    </ImageSlideCardContainerRelative>
  );
};
