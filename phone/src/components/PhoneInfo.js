import React, {Component} from 'react'

class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            name : 'name',
            phone: '010-0000-0000',
            id:2
        }
    }

    state = {
        editing :false,
        name: '',
        phone: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        //지금 수정상태가 아니고, 수정상태로 변환되지 않고,  info값이 같다면 리랜더링 안함
        if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        return true;
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({editing : !editing});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    componentDidUpdate(prevProps, prevState) {
        const { info , onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            this.setState({
                name:info.name,
                phone:info.phone
            });
        }

        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            })
        }
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);
        const style = {
            border : '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {editing} = this.state;
        if (editing) {
            return (
                <div style={style}>
                    <div><input placeholder='name' value={this.state.name} onChange={this.handleChange} name='name' /></div>
                    <div><input placeholder='phone number' value={this.state.phone} onChange={this.handleChange} name='phone' /></div>
                    <button onClick={this.handleToggleEdit}>save</button>
                    <button onClick={this.handleRemove}>delete</button>
                </div>
            )
        }

        const {name, phone } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>delete</button>
                <button onClick={this.handleToggleEdit}>Update</button>
            </div>
        )
    }
}

export default PhoneInfo;


