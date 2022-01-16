import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Beautify from 'js-beautify';

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
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height='100%'
          width='100%'
          maxWidth='300px'
          alt={node.data.target.fields.description}
        />
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre style={{backgroundColor: '#eee', padding: '1rem', fontSize: '1.25vw'}}>
            <code>{node.data.target.fields.codeBlock}</code>
          </pre>
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