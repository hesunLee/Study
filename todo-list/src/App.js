import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';
import Palette from './components/Palette';

class App extends Component {
    id = 3;
    state = {
        input : '',
        todos : [
            {id:0, text : ' Introduce React ' , checked: false },
            {id:1, text : ' Use JSX ' , checked: true },
            {id:2, text : ' UnderStandard React Life Cycle ' , checked: false },
        ],
        colors : [
            {cId: 0, chip: '#343a40'},
            {cId: 1, chip: '#f03e3e'},
            {cId: 2, chip: '#12b886'},
            {cId: 3, chip: '#228ae6'}
        ],
        color : {cId: 0, chip: '#343a40'}
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id ++,
                text: input,
                checked: false
            })
        })
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToogle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; //해당 index의 {id, text, checked} 객체 가져옴

        const nextTodos = [...todos];
        nextTodos[index] = { //가져온 객체를 그대로 사용하되 checked 값만 변경
            ...selected,
            checked: !selected.checked
        };
        this.setState({
            todos:nextTodos
        });
    }

    handelRemove = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    handleSelect = (id) => {
        const {colors} = this.state;
        const c_object = colors[colors.findIndex(color => color.cId === id)];
        this.setState({
            color: c_object
        });
    }

    render() {
        const {input, todos, colors, color} = this.state;
        const {handleChange, handleCreate, handleKeyPress, handleToogle, handelRemove, handleSelect} = this;
        return (
            <TodoListTemplate form={(
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />
            )} color={<Palette colors={colors} selected={color} onSelect={handleSelect}/>} >
              <TodoItemList todos={todos} onToggle={handleToogle} color={color} onRemove={handelRemove}/>
            </TodoListTemplate>
        );
    }
}

export default App;
