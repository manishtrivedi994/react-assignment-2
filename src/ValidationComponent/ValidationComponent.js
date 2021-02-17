import React from 'react'

const validationComponent = (props) => {
    return (
        <div>
            {props.length<5 ?<p>Text Too Short</p>:null}
            {props.length>10 ?<p>Text Too Long</p>:null}
        </div>
    
    )
}


export default validationComponent;