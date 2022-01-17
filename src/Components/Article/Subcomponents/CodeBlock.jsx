import React from 'react'
import useStyles from '../../styles'

const CodeBlock = ({code}) => {
    const classes = useStyles();

    return (
        <div>
            <pre style={{backgroundColor: '#eee', padding: '1rem'}} className={classes.code}>
                <code>{code.data.target.fields.codeBlock}</code>
            </pre>
        </div>
    )
}

export default CodeBlock
