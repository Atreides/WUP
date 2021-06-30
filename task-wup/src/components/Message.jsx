import React from 'react'
import '../style.css'

/**
 * 
 * @param {object} props {author: string, text: string}
 * @returns <Message>
 */

const Message = (props) => {
    return <div className="message">
        <h3>
        {props.author}
        </h3>
        <div>
         {props.text}
         </div>
    </div>
}

export {Message}