import React from 'react'
import useStyles from '../../styles'

const ImageBlock = ({image}) => {

    const classes = useStyles();

    return (
        <div style={{textAlign: 'center'}}>
            <img
                src={`https://${image.data.target.fields.file.url}`}
                className={classes.articleImageBlock}
                height='100%'
                width='100%'
                maxWidth='300px'
                alt={image.data.target.fields.description}
            />
        </div>
    )
}

export default ImageBlock
