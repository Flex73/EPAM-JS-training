import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../firebase';

class AddTasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    addTask() {
        const { title } = this.state;
        const { email } = this.props.user;
        taskRef.push({email, title});
    }

    render() {
        return (
            <div className="form-inline">
                <form>
                    <input 
                        type="text"
                        placeholder="Add task"
                        className="form-control"
                        onChange={event => this.setState({title: event.target.value})}/>
                    <button
                        className="button-success"
                        type="button"
                        onClick={() => this.addTask()}>
                            Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddTasks);