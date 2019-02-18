import React, {Component} from 'react'

export class NumberForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {value : ''}
    }

    doChange (e) {
        const curValue = e.target.value
        const newValue = curValue.replace(/[^0-9]/, '')
        this.setState({value : newValue})
    }

    doSubmit(e) {
        window.alert('go : ' + this.state.value)
        e.preventDefault()
    }

    render() {
        const doChange = (e) => this.doChange(e)
        const doSubmit = (e) => this.doSubmit(e)

        return (
            <form onSubmit={doSubmit}>
                <input type='text' value={this.state.value} onChange={doChange} />
                <input type='submit' value='go' />
            </form>
        );
    }
}

export default NumberForm;