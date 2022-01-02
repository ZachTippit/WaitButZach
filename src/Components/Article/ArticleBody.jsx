import React from 'react';
import ReactDOM from 'react-dom';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }) => <span className="bold">{children}</span>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  documentToReactComponents(richTextDocument, options),
  rootElement
);

// -> <p class="align-center"><span class="bold">Hello</span><u> world!</u></p>