import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./Component/Contact";


class App extends Component {

    state = {
        contacts:[{
            name: 'Hüseyin',
            phone: '52131232'
        },{
            name: 'Ahmet',
            phone: '42412421312'
        }]
    };
    addContact = (x) => {
        const { contacts } = this.state;
        contacts.push(x);

        this.setState({
            contacts
        });
        console.log(x);

    }

    render() {
    return (
        <div className="App">
            <img src={logo} width="350" />
            <Contact
                addContact={this.addContact}
                contacts={this.state.contacts}/>
        </div>
    );
  }
}

export default App;
