import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {


    static propTypes = {
        addContact: PropTypes.func
    };


    state = {
        name: '',
        phone: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });

        this.setState({
            name:'',
            phone:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name={"name"} id={"name"} onChange={this.onChange} value={this.state.name}
                           placeholder={"Enter a name"}/>
                    <br/>
                    <input name={"phone"} id={"phone"} onChange={this.onChange} value={this.state.phone}
                           placeholder={"Enter a phone"}/>
                    <br/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;
