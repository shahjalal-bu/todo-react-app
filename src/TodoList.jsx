import React from 'react';

const TodoList = (props) => {
    const {delItem,id,i} = props;
    return (
        <div>
            <span onClick={() => delItem(id)}>✖️</span> <li key ={id}> {i}</li>
        </div>
    );
};

export default TodoList;