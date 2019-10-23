import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={`/edit/${props.exercise._id}`}>edit</Link> / <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExerciseList extends Component {

    constructor(props) {
        super(props)

        this.deleteExercise = this.deleteExercise.bind(this)

        this.state = { exercises: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/exercises')
        .then(response => {
            if(response) {
                this.setState({
                    exercises: response.data
                })
            }
        })
        .catch(err => alert(err))
    }

    deleteExercise(id) {
        axios.delete(`http://localhost:8000/exercises/${id}`)
        .then(res => alert(res.data))

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(exercise => {
            return <Exercise exercise={exercise} deleteExercise={this.deleteExercise} key={exercise._id}/>
        })
    }

    render() {

        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        )

    }

}