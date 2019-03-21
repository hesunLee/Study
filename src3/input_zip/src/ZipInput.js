import React, {Component} from 'react';

class ZipInput extends Component {
    constructor (props) {
        super (props);
        const v = (this.props.value) ? this.props.value : '';

        this.state = {
            value : v ,
            isOk : this.checkValue(v)
        }
    }

    checkValue = (e) => {
        const zipPattern = /^\d{5}$/
        return zipPattern.test(e)
    }

    handleChange = (e) => {
        const zipCode = e.target.value
        const newValue = zipCode.replace(/^[^0-9]+/g, '')
        const newIsOk = this.checkValue(newValue)

        this.setState({
            value: newValue,
            isOk : newIsOk
        })

        const { onChange } = this.props;
        if (onChange) {
            onChange({
                target: this,
                value: newValue,
                isOk : newIsOk
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            isOk: this.checkValue(nextProps.value)
        })
    }

    renderStateMessage() {
        const style = {
            margin: '8px',
            padding: '8px',
            color: 'white',
        }

        let msg = null
        if (this.state.isOk) {
            style.backgroundColor = 'green'
            msg = 'OK'
        } else {
            style.backgroundColor = 'red'
            msg = 'NG'
        }

        return <span style={style}>{msg}</span>
    }

    render() {
        const msg = this.renderStateMessage()
        return (
            <div>
                <label>
                    zipCode : <br />
                    <input type='text' placeholder='insert ZipCode' value={this.state.value} onChange={this.handleChange} />
                    {msg}
                </label>
            </div>
        )
    }
}

export default ZipInput;