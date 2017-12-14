import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeTaskRef } from '../firebase';

class CompleteTaskList extends Component {

    componentDidMount() {
        completeTaskRef.on('value', snap => {
            let completeTasks = [];
            snap.forEach(completeTask => {
                const { email, title } = completeTask.val();
                completeTasks.push({email, title});
            })
            this.props.setCompleted(completeTasks);
        })
    }

    clearCompleted() {
        completeTaskRef.set([]);
    }

    render() {
        return(
            <div>
                {
                    this.props.completeTasks.map((completeTask, index) => {
                        const { title, email } = completeTask;
                        return (
                            <div key={index}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button 
                    className="button-primary"
                    onClick={() => this.clearCompleted()}>Clear all</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeTasks} = state;
    return {
        completeTasks
    }
}

export default connect(mapStateToProps, { setCompleted })(CompleteTaskList);