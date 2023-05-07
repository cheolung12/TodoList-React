import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from '../css/AddTodo.module.css';

export default function AddTodo({ add }) {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0){
            alert('Please enter Todo');
            return;
        }
        add({id: uuidv4(), text, status: 'active'});
        setText('');

    }
    const handleChange = e => setText(e.target.value);


    return (
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
          <input  className={styles.input} type="text" placeholder="Add Todo" onChange={handleChange} value={text}/>
          <button className={styles.button}> Add </button>
          </form>
        </div>
    );
}

