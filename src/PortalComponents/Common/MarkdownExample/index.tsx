import React from 'react';
import Markdown from 'markdown-to-jsx';

export const MarkdownComponent = (props: any) => {
  const { text = '' } = props;
  const text1 = `# Ecologia\n\nLa ecología es la rama de la biología que estudia las relaciones de los diferentes seres vivos entre sí y con su entorno: _la biología de los ecosistemas._​ Estudia cómo estas **interacciones **entre los organismos y su ambiente afectan a propiedades como la distribución o la abundancia.\n\n\n\n          \nDkjds dsjsd dslhds dslhds dsjsd `;

  return <Markdown>{text1}</Markdown>;
};
