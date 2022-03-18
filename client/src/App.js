import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


import Item from './components/Item';

const App =()=> {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:5000/get-todo')
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  });

  const addUpdateTodo = () => {
    if (isUpdating === '') {
      axios
        .post('http://localhost:5000/save-todo', { text })
        .then((res) => {
          console.log(res.data);
          setText('');
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post('http://localhost:5000/update-todo', { _id: isUpdating, text })
        .then((res) => {
          console.log(res.data);
          setText('');
          setUpdating('');
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteTodo = (_id) => {
    axios
      .post('http://localhost:5000/delete-todo', { _id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const updateTodo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  };

  return (


<section className='todo-container'>
<article className='todo-create'>
    <form className='todo-create__form'>
        <h2 className='todo-create__header'> Register New ToDo </h2>
        <textarea className='todo-create__note'
        rows={3}
            type='text'
            placeholder='Write Something...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

<button className='todo-create__button' onClick={addUpdateTodo} id='btnAddTodo'>
                        Add
                    </button>
          
       </form>

          <div className='list'>
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={() => deleteTodo(item._id)}
              update={() => updateTodo(item._id, item.text)}
            />
          ))}
        </div>
</article>
</section>


  )}





export default App;
