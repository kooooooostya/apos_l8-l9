import React from 'react';
import axios from 'axios'
import firebaseApp from "../auth/utils/config/firebase-config";

export default class DeleteComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        const item = {id: this.input.current.value};

        const user = firebaseApp.auth().currentUser;
        if (!user) {
            alert("user not registered")
        } else {
            axios.postForm('http://localhost:2121/delete_user', JSON.stringify(item), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
                this.input.current.clear()
                // console.log(response);
            }).catch(function (error) {
                this.input.value = ""
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="number" ref={this.input}/>
                </label>
                <br/>
                <input type="submit" value="Delete"/>
            </form>
        );
    }
}
