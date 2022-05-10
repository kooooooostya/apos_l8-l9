import React from 'react';
import axios from 'axios'
import firebaseApp from "../auth/utils/config/firebase-config";

export default class AddUsersComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input_name = React.createRef();
        this.input_surname = React.createRef();
        this.input_country = React.createRef();
    }

    handleSubmit(event) {
        const item = {
            name: this.input_name.current.value,
            surname: this.input_surname.current.value,
            country: this.input_country.current.value,
        };

        const user = firebaseApp.auth().currentUser;
        if (!user) {
            alert("user not registered")
        } else {
            axios.postForm('http://localhost:2121/add_user', JSON.stringify(item), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input_name}/>
                </label>
                <br/>
                <label>
                    Surname:
                    <input type="text" ref={this.input_surname}/>
                </label>
                <br/>
                <label>
                    Country:
                    <input type="text" ref={this.input_country}/>
                </label>
                <br/>
                <input type="submit" value="Delete"/>
            </form>
        );
    }
}

