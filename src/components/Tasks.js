import React, {Component} from 'react'
import Task from "./Task";

class Tasks extends Component {
    state = {
        tasks:
            [
                {
                    name: "Organizacja notatek",
                    elements: [
                        {name: "Docs Quick", isClicked: false},
                        {name: "Telefon notatki", isClicked: false},
                        {name: "Todoist Skrzynka odbiorcza", isClicked: false},
                        {name: "Todoist Skrzynka odbiorcza", isClicked: false},
                    ]
                },
                {
                    name: "Backup Soft",
                    elements: [
                        {name: "Google https://takeout.google.com/settings/takeout", isClicked: false},
                        {name: "Google Calendar", isClicked: false},
                        {name: "Google Chrome (Bookmarks)", isClicked: false},
                        {name: "Google Drive (Notes)", isClicked: false},
                    ]
                },
                {
                    name: "Backup Hard",
                    elements: [
                        {name: "Google https://takeout.google.com/settings/takeout", isClicked: false},
                        {name: "OneNote cały notatnik jako doc", isClicked: false},
                        {name: "Folder Documents (Ubuntu)", isClicked: false},
                        {name: "Folder Dane (Dysk D)", isClicked: false},
                        {name: "Chrome Passwords Export", isClicked: false},
                        {name: "Google Calendar", isClicked: false},
                        {name: "Google Chrome (all)", isClicked: false},
                        {name: "Google Contacts", isClicked: false},
                        {name: "Google Drive", isClicked: false},
                        {name: "Google Mail", isClicked: false},
                    ]
                },
            ]
    };

    render() {
        return <div>
            {this.state.tasks.map((task, i) => {
                return <Task key={i} name={task.name} elements={task.elements}/>
            })}
        </div>
    }
}

export default Tasks;
