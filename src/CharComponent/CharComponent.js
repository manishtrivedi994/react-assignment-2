import React from 'react'

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        border: '1px solid black',
        padding: '16px',
        margin: '16px',
        textAlign: 'center'
    }
    return (
        <div>
            <p style={style} onClick={props.click}>{props.value}</p>
        </div>
    )
}

export default charComponent;