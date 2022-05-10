import React from 'react';
import axios from 'axios'

export default class AllUsersComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // fetch('http://localhost:2121/get_users')
        //     .then(response => response.json())
        //     .then(data => this.setState(data.response));
        axios.get(`http://localhost:2121/get_users`, {
            headers: {"Content-Type": "application/json"}
        })
            .then(res => {
                console.log("data: " + res.data)
                const resUsers = res.data.response;
                this.setState({
                    users: resUsers
                });
                console.log(res.data)
            })
    }

    render() {
        const heading = ['id', 'name', 'surname', 'country'];
        const body = this.state.users.map(user =>
            [user.id, user.name, user.surname, user.country]
        );

        console.log("body array: " + body)

        return (
            <div >
                <Table heading={heading} body={body} />,
            </div>
        );
    }


}

class Table extends React.Component {
    render() {
        const heading = this.props.heading;
        const body = this.props.body;
        return (
            <table style={{ width: 500 }}>
                <thead>
                <tr>
                    {heading.map(head => <th>{head}</th>)}
                </tr>
                </thead>
                <tbody>
                {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        );
    }
}

class TableRow extends React.Component {
    render() {
        const row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}

