import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class ExerciseCreate extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:8000/users')
        .then(response => {

            if(response) {
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                })
            }

        })

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        let {username, description, duration, date} = this.state

        const exercise = {
            username,
            description,
            duration,
            date
        }

        console.log(exercise)

        axios.post('http://localhost:8000/exercises/add', exercise)
        .then(res => {
            alert(res.data)
            window.location = '/'
        })
        .catch(err => alert(err))
        
    }

    render() {

        return (
            <div>
                <h3>Create new exercise log</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref='userInput' required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>

                            {
                                this.state.users.map(user => {
                                    return <option key={user} value={user}>{user}</option>
                                })
                            } 

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" required className='form-control' value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="number" required className='form-control' value={this.state.duration} onChange={this.onChangeDuration}/>
                    </div>
                    <div className="form-group">
                        <label>Date:  </label>
                        <br/>
                        <DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
                    </div>

                    <div className="form-grop">
                            <input type="submit" value='Create exercise log' className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )

    }

}