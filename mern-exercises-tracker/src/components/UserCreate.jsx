import React, { Component } from 'react'
import axios from 'axios'

export default class UserCreate extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username
        }

        console.log(user)
        
        axios.post('http://localhost:8000/users/add', user)
        .then(res => alert(res.data))
        .catch(err => alert(err))

        this.setState({
            username: ''
        })
    }

    render() {

        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" className="form-control" required value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )

    }

}