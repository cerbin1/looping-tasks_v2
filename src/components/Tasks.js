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
        let state = this.state;
        let tasks = state.tasks;
        let task1 = tasks[0];
        let task2 = tasks[1];
        let task3 = tasks[2];
        let task4 = tasks[3];
        return <div className="container">
            <Router>
                <div>
                    <nav>
                        <h1><Link to="/">{state.homePage}</Link></h1>
                        <h1><Link to="/task1">{task1.name}</Link></h1>
                        <h1><Link to="/task2">{task2.name}</Link></h1>
                        <h1><Link to="/task3">{task3.name}</Link></h1>
                        <h1><Link to="/task4">{task4.name}</Link></h1>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <p>{state.homePageText}</p>
                        </Route>
                        <Route exact path="/task1" component={() =>
                            <Task name={task1.name}
                                  elements={task1.elements}
                                  links={task1.links}/>}>
                        </Route>
                        <Route exact path="/task2" component={() =>
                            <Task name={task2.name}
                                  elements={task2.elements}
                                  links={task2.links}/>}>
                        </Route>
                        <Route exact path="/task3" component={() =>
                            <Task name={task3.name}
                                  elements={task3.elements}
                                  links={task3.links}/>}>
                        </Route>
                        <Route exact path="/task4" component={() =>
                            <Task name={task4.name}
                                  elements={task4.elements}
                                  links={task4.links}/>}>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    }
}

export default Tasks;
