import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";


function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = e => {
    setInputList(e.target.value);
  };
  const listOfItem = () => {
    if(inputList != ""){
      setItems(oldItem => {
        return [...oldItem, inputList];
      });
      setInputList("");
    }
   
  };
  // //this is alternative
  // const listOfItem = () => {
  //   setItems([...items, inputList]);
  // };
  const delItem = (id) =>{
    console.log(id);
    console.log("deleted");
    setItems((oldItems) =>{
      return oldItems.filter((element,index) =>{
        return index !== id;
      })
    })

  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type='text'
            name=''
            id=''
            value={inputList}
            placeholder='Add a Items'
            onChange={itemEvent}
          />
          <button onClick={listOfItem}> + </button>
          <ol>
            {items.map((i,id) => (
              <>
                <div className='todo-list'>
                  <TodoList delItem={delItem} id={id} i={i}/>
                </div>
              </>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
