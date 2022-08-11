import React from 'react';
import { Title, MainContainer } from '../Commons';

interface ColeoAnalysisAllProps {
  graphicTitle?: string;
  graphicUrl?: string;
  pageTitle?: string;
  styles?: any;
}

export const ColeoAnalysisAll = (props: ColeoAnalysisAllProps) => {
  const { graphicTitle, graphicUrl, pageTitle, styles } = props;
  const { height = 500, frameBorder = 0 } = styles;
  return (
    <MainContainer>
      <Title>{pageTitle}.</Title>
      <iframe
        title={graphicTitle}
        src={graphicUrl}
        height={height}
        frameBorder={frameBorder}
      />
    </MainContainer>
  );
};
