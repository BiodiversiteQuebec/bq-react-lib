import React from 'react';
import {
  TaxaItemContainer,
  TaxaItemSubTitle,
  TaxaItemTitle,
} from './taxaitemstyle';

interface TaxaMenuItemProps {
  value?: string;
  vernacular_fr?: string;
  vernacular_en?: string;
}
export const TaxaMenuItem = ({ value, vernacular_fr }: TaxaMenuItemProps) => {
  return (
    <TaxaItemContainer>
      <TaxaItemTitle>{`${vernacular_fr || 'none'}`}</TaxaItemTitle>
      <TaxaItemSubTitle>{value}</TaxaItemSubTitle>
    </TaxaItemContainer>
  );
};
