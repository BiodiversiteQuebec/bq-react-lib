import React from 'react';
import { AvatarImg } from './styles';

interface AvatarProps {
  src?: string;
}

const DEFAULT_SRC = '/images/images-no-disponible.png';

export const Avatar = (props: AvatarProps) => {
  const { src } = props;

  return <AvatarImg src={src ?? DEFAULT_SRC} />;
};
