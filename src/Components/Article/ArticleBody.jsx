import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Beautify from 'js-beautify';
import CodeBlock from './Subcomponents/CodeBlock'
import ImageBlock from './Subcomponents/ImageBlock'

const Bold = ({ children }) => <span style={{fontWeight: 'bold'}}>{children}</span>;

const Text = ({ children }) => <p style={{textAlign: 'justify'}}>{children}</p>;

const Code = ({ children }) => {return Beautify(children)}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (text) => <Code>{text}</Code>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <ImageBlock image={node} />
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <CodeBlock code={node} />
        );
      }
    }
  },
};

const ArticleBody = ({article}) => {

  return(
    <>
      {documentToReactComponents(article, options)}
    </>
  )
}

export default ArticleBody;