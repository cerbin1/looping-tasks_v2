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
                    links: [{name: "Google backup", link: "https://takeout.google.com/settings/takeout"}],
                    elements: [
                        {name: "Google Calendar", isClicked: false},
                        {name: "Google Chrome (Bookmarks)", isClicked: false},
                        {name: "Google Drive (Notes)", isClicked: false},
                    ]
                },
                {
                    name: "Backup Hard",
                    links: [{name: "Google backup", link: "https://takeout.google.com/settings/takeout"}],
                    elements: [
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
                {
                    name: "Biznes",
                    links: [
                        {name: "Gaz", link: "https://ebok.pgnig.pl/"},
                        {name: "Prąd", link: "https://logowanie.tauron.pl/"},
                        {name: "PKO", link: "https://www.ipko.pl//"},
                        {name: "mBank", link: "https://online.mbank.pl/pl/Login"},
                        {name: "Alior", link: "https://https://system.aliorbank.pl/sign-in/"},
                        {
                            name: "Sheet",
                            link: "https://docs.google.com/spreadsheets/d/1RS4WCPEqILRgId3JlfXZuRd_f6kWZtYg1hzfhM8Y4n8/edit#gid=963549029"
                        }
                    ],
                    elements: [
                        {name: "Przygotować docsa na następny miesiąc", isClicked: false},
                        {name: "Zapisać aktualną kwotę w następnym miesiącu", isClicked: false},
                        {name: "Zapisać pracę biorąc pod uwagę godziny", isClicked: false},
                        {name: "Opłacić media, abonamenty i kredyty i pobrać faktury", isClicked: false},
                        {name: "Opłacić X", isClicked: false},
                        {name: "Uzupełnić kwoty z apki", isClicked: false},
                        {name: "Uzupełnić resztę kwot w arkuszu", isClicked: false},
                        {name: "Przeanalizować ostatni miesiąc", isClicked: false}
                    ]
                },
            ]
    };

    render() {
        return <div className="container">
            {this.state.tasks.map((task, i) => {
                return <Task key={i} name={task.name} elements={task.elements} links={task.links}/>
            })}
        </div>
    }
}

export default Tasks;
