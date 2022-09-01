import React from 'react';
import Card from 'react-bootstrap/Card';
import { FilledButton } from '../Buttons';
import { CardBodyGrid, CardTitleText, CardDescriptionText } from './styles';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  theme?: any;
}

const MyCard = styled(Card)`
  width: 270px;
  min-width: 270px;
  height: 100%;
  border-radius: 15px;
  border: 0px;
`;

const CardWrapper = (props: Props) => {
  const { children, theme } = props;
  return <MyCard className="shadow">{children}</MyCard>;
};

interface CardContent {
  mediasrc?: string;
  category?: string;
  title?: string;
  tag?: string;
}

interface ContentCardProps {
  card?: CardContent;
}

const getColorbyCategory = (category: string) => {
  switch (category) {
    case 'article':
      return '#7A93B5';
      break;
    case 'data':
      return '#7AB5B0';
      break;
    case 'balado':
      return '#E0B658';
      break;
    case 'tool':
      return '#E08558';
      break;
    default:
      return '#7A93B5';
      break;
  }
};

export const ContentCard = (props: ContentCardProps) => {
  const { card = undefined } = props;
  if (!card) return null;

  const {
    mediasrc = '/images/forest.jpg',
    category = 'article',
    title = 'Les lynxs de nos forets',
    tag,
  } = card;

  const color = getColorbyCategory(category);

  return (
    <CardWrapper>
      <Card.Img
        variant="top"
        style={{ height: '160px', borderRadius: '15px 15px 0px 0px' }}
        src={mediasrc}
      />
      <Card.Body
        style={{
          borderRadius: '0px 0px 15px 15px',
          padding: '15px 8px',
        }}
      >
        <CardBodyGrid>
          <FilledButton color={color}>{category}</FilledButton>
          <div style={{ textAlign: 'right' }} className={'body-descr-2'}>
            <div style={{ textAlign: 'right', width: '100%' }}>
              <CardTitleText>{tag}</CardTitleText>
            </div>
          </div>
          <CardDescriptionText className={'body-descr-3'}>
            {title}
          </CardDescriptionText>
        </CardBodyGrid>
      </Card.Body>
    </CardWrapper>
  );
};
