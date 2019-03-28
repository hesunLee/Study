import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({color,form, children}) => {
    return (
        <main className='todo-list-template'>
            <div className='title'>
                Today Todo List
            </div>
            <section className="palette-wrapper">
                {color}
            </section>
            <section className="from-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;