import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddTasks from './AddTasks';
import TaskList from './TaskList';
import CompleteTaskList from './CompleteTaskList';

class App extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return(
          <div>
              <h3>What should you do?</h3>
              <AddTasks />
              <hr />
              <h4>Tasks</h4>
              <TaskList />
              <hr />
              <h4>Completed tasks</h4>
              <CompleteTaskList />
              <hr />
              <div>List of tasks</div>
              <button 
                className="danger"
                onClick={() => this.signOut()}>Sign Out</button>
          </div>  
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, null)(App);