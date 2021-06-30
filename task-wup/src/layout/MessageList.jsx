import React from 'react'
import { Message } from '../components/Message';
import '../style.css'

/**
 * Component for showing messages list
 * 
 * @param {object} props {author: string, text: string}
 * @returns <MessageList>
 */

const MessageList = (props) => {
    
    const items = props.items || [];
    
    return (<div className="flex">
        {items.map((item) =>
        <Message key={item._id} {...item} />    
        )}
        </div>
    );
}

export {MessageList}