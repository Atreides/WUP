import React, {useState} from 'react'
import axios from 'axios';
import '../style.css'

/**
 * Component for showing form
 * 
 * @returns <MessageWindow>
 */

const MessageWindow = () => {
    
   
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const add = () =>{  
        axios({
        method: 'POST',
        url: "http://localhost:8000/message",
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        data: {
            author,
            text
        }
    }).then(response => {
        console.log(response);
    }).catch(error =>{
        console.log(error);
    })
    };


    return <div>
        <form className="form">
            <div>
                <input className="input" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <label>Ваше имя</label>
            </div>
            <div>
                <input className="input" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <label>Ваше сообщение</label>
            </div>
            <button className="btn" onClick={add}>Отправить</button>
        </form>
    </div>
}

export {MessageWindow}