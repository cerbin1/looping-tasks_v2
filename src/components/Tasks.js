import React, {Component} from 'react'
import Task from "./Task";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

class Tasks extends Component {
    state = {
        homePage: 'Strona główna',
        homePageText: 'Wybierz zadanie do zrobienia',
        tasks:
            [
                {
                    id: 'task1',
                    name: "Porządki",
                    links: [
                        {
                            name: "Quick Notes",
                            link: "https://docs.google.com/document/d/1lKqrQYRtmsOP9UGHxnAQOOw01lfaMSjDvesVK4l-8wo/edit#heading=h.enryj93vpczc"
                        },
                        {name: "Google Drive", link: "https://drive.google.com/drive/my-drive"},
                    ],
                    elements: [
                        {name: "Organizacja maila głównego", isClicked: false},
                        {name: "Organizacja maila prywatnego", isClicked: false},
                        {name: "Utworzyć taski z Make Notes", isClicked: false},
                        {name: "Quick Notes", isClicked: false},
                        {name: "Notatki w telefonie", isClicked: false},
                        {name: "Google Drive", isClicked: false}
                    ]
                },
                {
                    id: 'task2',
                    name: "Backup Soft",
                    links: [{name: "Google backup", link: "https://takeout.google.com/settings/takeout"}],
                    elements: [
                        {name: "Google Calendar", isClicked: false},
                        {name: "Google Chrome (Bookmarks)", isClicked: false},
                        {name: "Google Drive (Notes)", isClicked: false},
                    ]
                },
                {
                    id: 'task3',
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
                    id: 'task4',
                    name: "Biznes",
                    links: [
                        {name: "Gaz", link: "https://ebok.pgnig.pl/"},
                        {name: "Prąd", link: "https://logowanie.tauron.pl/"},
                        {name: "PKO", link: "https://www.ipko.pl//"},
                        {name: "mBank", link: "https://online.mbank.pl/pl/Login"},
                        {name: "Alior", link: "https://system.aliorbank.pl/sign-in"},
                        {
                            name: "Sheet",
                            link: "https://docs.google.com/spreadsheets/d/1RS4WCPEqILRgId3JlfXZuRd_f6kWZtYg1hzfhM8Y4n8/edit#gid=963549029"
                        }
                    ],
                    elements: [
                        {
                            name: "Przygotować docsa na następny miesiąc (Skopiować całe 3 kolumny, zmienić nazwę miesiąca)",
                            isClicked: false
                        },
                        {name: "Opłacić media, abonamenty i kredyty i pobrać faktury", isClicked: false},
                        {name: "Opłacić X", isClicked: false},
                        {name: "Zapisać aktualną kwotę w następnym miesiącu", isClicked: false},
                        {name: "Zapisać pracę biorąc pod uwagę godziny", isClicked: false},
                        {name: "Uzupełnić kwoty z apki", isClicked: false},
                        {name: "Uzupełnić resztę kwot w arkuszu", isClicked: false},
                        {name: "Przeanalizować ostatni miesiąc", isClicked: false}
                    ]
                },
            ]
    };

    render() {
        return <div className="container">
            <Router>
                <div>
                    <nav>
                        <h1><Link to="/">{this.state.homePage}</Link></h1>
                        {this.state.tasks.map(task => {
                                return (
                                    <h1 key={task.id}><Link to={'/' + task.id}>{task.name}</Link></h1>
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
