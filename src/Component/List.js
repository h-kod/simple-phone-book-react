import React, {Component} from 'react';

class List extends Component {


    state = {
        filterText: ''
    }


    onChangeFilterText = (e) => {
        console.log(e.target.value);
        this.setState({
            filterText: e.target.value
        })

    }


    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()) !== -1
            }
        );

        return (
            <div className={"listArea"}>
                <input value={this.state.value} onChange={this.onChangeFilterText} name={"filter"} id={"filter"}
                       placeholder={"Filter by name or phone"}/>
                <ul>
                    {
                        filteredContacts.map(contact => {
                            return (
                                <li key={Math.floor(Math.random() * 123)}>
                                    <p>{contact.name}</p>
                                    <b>{contact.phone}</b>
                                    <hr/>
                                </li>
                            )
                        }).reverse()
                    }
                </ul>
            </div>
        );
    }
}

export default List;
