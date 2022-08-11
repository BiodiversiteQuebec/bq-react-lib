import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Tooltip from '@mui/material/Tooltip';

import analyze from 'rgbaster';

import { NoImageBox } from '../ImageBox';
import {
  ImageSlideCardContainer,
  ImageSlideCardContainerRelative,
  ImageSlideCardDetailTop,
  ImageSlideCardTopData,
  ImageSlideCardText,
  ImageSlideCardDetailContainer,
  ImageSlideCardDetailTopBold,
  ImageSlideCardDetailTopBottom,
} from '../slideshowstyles';

import './ImageSlideCard.css';

/**
 * @param param0.lgn
 * @param param0.vernacular
 * @returns component
 */
const ImageSlideCardDetail = ({ lgn = 'fr.', vernacular = '' }) => (
  <ImageSlideCardDetailContainer>
    <ImageSlideCardDetailTopBold>{vernacular}</ImageSlideCardDetailTopBold>
    <div>{lgn}</div>
  </ImageSlideCardDetailContainer>
);

/**
 *
 * @param props properties
 * @returns component
 */
export const ImageSlideCard = (props: any) => {
  const {
    image,
    card,
    onSearch = (scientificName: string) => scientificName,
  } = props;

  const [color, setColor] = useState('rgba(128,128,128,0.3)');
  const [open, setOpen] = useState(false);

  /**
   *@returns void
   */
  const handleOpen = () => setOpen(true);

  /**
   *@returns void
   */
  const handleClose = () => setOpen(false);

  const imageData = {
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/NorthernSawwhetOwl23.jpg/500px-NorthernSawwhetOwl23.jpg',
    ok: false,
  };

  let aspectRatio = 0;

  const styleModel: any = { width: 0, height: 0 };
  if (image) {
    aspectRatio = image.width / image.height;

    if (aspectRatio <= 1) {
      styleModel.width = `auto`;
      styleModel.height = '80%';
    } else {
      styleModel.width = '80%';
      styleModel.height = `auto`;
    }
    imageData.url = image.thumburl;
    imageData.ok = true;
  }

  /**
   *
   * @param text specie name
   * @returns name
   */
  const t = (text: string) => text;

  analyze(imageData.url, null).then((colors: any) => {
    if (colors.length > 0) {
      setColor(colors[0].color);
    }
  });

  return (
    <ImageSlideCardContainer>
      <ImageSlideCardContainerRelative>
        <ImageSlideCardContainerRelative>
          {image !== undefined ? (
            <div
              style={{
                backgroundColor: color,
              }}
            >
              <img
                className="testimage"
                src={image.thumburl}
                alt={image.name}
              />
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
              onClick={handleOpen}
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
              onClose={handleClose}
              onClick={handleClose}
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
                    src={image ? image.thumburl : ''}
                    alt={image ? image.name : 'none'}
                    style={styleModel}
                  />
                </Box>
              </Fade>
            </Modal>
          </div>
        </ImageSlideCardContainerRelative>
        <ImageSlideCardDetailTop>
          <div className="card-info" style={{ flex: 1 }}>
            <ImageSlideCardTopData>
              {card.valid_scientific_name}
            </ImageSlideCardTopData>
            <ImageSlideCardText>{`${card.obs} obs.`}</ImageSlideCardText>
          </div>
          <Tooltip title={t('Afficher sur la carte')}>
            <IconButton
              sx={{ width: 15, height: 15 }}
              onClick={() => onSearch(card.scientificName)}
            >
              <SearchIcon sx={{ fontSize: 15, color: ' #2e483e' }} />
            </IconButton>
          </Tooltip>
        </ImageSlideCardDetailTop>
        <ImageSlideCardDetailTopBottom>
          <ImageSlideCardDetail
            lgn="fr."
            vernacular={`${card.vernacular_fr || 'none'}`}
          />
          <ImageSlideCardDetail
            lgn="en."
            vernacular={`${card.vernacular_en || 'none'}`}
          />
        </ImageSlideCardDetailTopBottom>
      </ImageSlideCardContainerRelative>
    </ImageSlideCardContainer>
  );
};
