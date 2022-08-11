import React from 'react';
import {
  CardContainer,
  CardTop,
  CardBottom,
  CardDetail,
  CardDetailTop,
  TextSmall,
} from './cardstyles';

const Detail = ({ bigText = 'fr.', smallText = '' }) => (
  <CardDetail>
    <CardDetailTop>{bigText}</CardDetailTop>
    <TextSmall>{smallText}</TextSmall>
  </CardDetail>
);

export const Summary = (props: any) => {
  const { data, translator } = props;
  const {
    group = 'Toutes les espèces' as string,
    currentgroupobstotal = 0 as number,
    currentgroupspeciestotal = 0 as number,
  } = data;

  return (
    <CardContainer elevation={3}>
      <CardTop> {translator(group)}</CardTop>
      <CardBottom>
        <Detail
          bigText={currentgroupobstotal}
          smallText={translator('Observations')}
        />
        <Detail
          bigText={currentgroupspeciestotal}
          smallText={translator('Espèces')}
        />
      </CardBottom>
    </CardContainer>
  );
};
