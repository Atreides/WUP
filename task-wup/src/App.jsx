
import React, {useState, useEffect} from 'react';
import { MessageList } from './layout/MessageList';
import { MessageWindow } from './components/MessageWindow';
import axios from 'axios';
import './style.css'

/**
 * Component for showing App
 * 
 * @returns <App >
 */

const App = () => {
  const [data, setData] = useState([]);

    const getData = () => {
      
      axios({
      method: 'GET',
      url: "http://localhost:8000/message",
      headers: {'Accept': 'application/json, text/plain, */*'}
        // 'Access-Control-Allow-Origin': '*',
      // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      // "Content-Type":"text/plain;charset=UTF-8"
      // },
      // referrerPolicy: "strict-origin-when-cross-origin"
  }).then(response => {
      setData(response.data)
      // apartments = response;
      console.log(response.data);
  }).catch(error =>{
      console.log(error);
  })
};
      

  
  useEffect(getData, []);

  // const data = [{
  //   "id": "1",
  //   "author": "Vasya",
  //   "text": "Hello, world"
  // },
  // {
  //   "id": "2",
  //   "author": "Kolya",
  //   "text": "akuna matata"
  // }];

  return (
    <div>
      <MessageWindow />
      <MessageList items={data}/>
    </div>
  );
}


export {App}