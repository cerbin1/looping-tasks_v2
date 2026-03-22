import React, {Component} from 'react'
import Task from "./Task";
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'
import TaskData from '../Data'

class Tasks extends Component {
    convertToTaskElements(taskDataElements) {
        return taskDataElements.map(taskName => ({name: taskName, isClicked: false}))
    }

    getTasksData() {
        let tasks = [];
        TaskData.taskData.forEach((taskData, index) => {
            tasks.push(
                {
                    id: index,
                    name: taskData.name,
                    links: taskData.links,
                    elements: this.convertToTaskElements(taskData.elements),
                }
            )
        })
        return tasks;
    }

    state = {
        homePage: 'Strona główna',
        homePageText: 'Wybierz zadanie do zrobienia',
        tasks: this.getTasksData()
    };

    render() {
        return <div className="container">
            <Router>
                <div>
                    <nav>
                        <h1><Link to="/">{this.state.homePage}</Link></h1>
                        <hr/>
                        {this.state.tasks.map(task => {
                                return (
                                    <h2 key={task.id}><Link to={'/' + task.id}>{task.name}</Link></h2>
                                )
                            }
                        )}
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <p>{this.state.homePageText}</p>
                        </Route>

                        {this.state.tasks.map(task => {
                                return (
                                    <Route key={task.id} exact path={'/' + task.id} component={() =>
                                        <Task name={task.name}
                                              elements={task.elements}
                                              links={task.links}/>}>
                                    </Route>)
                            }
                        )}
                    </Switch>
                </div>
            </Router>
        </div>
    }
}

export default Tasks;
