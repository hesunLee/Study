import React from 'react';

export class SimpleForm extends React.Component {
    constructor (props) {
        super(props)
        // ���¸� �ʱ�ȭ�մϴ�. --- (��1)
        this.state = { value: '' }
    }

    doChange (e) {
        const newValue = e.target.value
        this.setState({value: newValue})
    }

    doSubmit(e) {
        window.alert('move : ' + this.state.value)
        e.preventDefault()
    }

    render () {
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)

        return (
            <form onSubmit={doSubmit}>
                <input type='text' value={this.state.value} onChange={doChange} />
                <input type='submit' value='move'/>
            </form>
        )
    }
}

/*
import React from 'react'
// �Է� ��� ������Ʈ�Դϴ�.
export class SimpleForm extends React.Component {
    constructor (props) {
        super(props)
        // ���¸� �ʱ�ȭ�մϴ�. --- (��1)
        this.state = { value: '' }
    }
    // ���� ������� �� --- (��2)
    doChange (e) {
        const newValue = e.target.value
        this.setState({value: newValue})
    }
    // ���� ��ư�� ������ �� --- (��3)
    doSubmit (e) {
        window.alert('����: ' + this.state.value)
        e.preventDefault()
    }
    // ȭ�� ������ --- (��4)
    render () {
        // �̺�Ʈ�� �޼��忡 ���ε��մϴ�.
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <form onSubmit={doSubmit}>
                <input type='text'
                       value={this.state.value}
                       onChange={doChange} />
                <input type='submit' value='����' />
            </form>
        )
    }
}*/