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
                        {name: "[Google] Calendar", isClicked: false},
                        {name: "[Google] Chrome (Bookmarks)", isClicked: false},
                        {name: "[Google] Drive (Notes)", isClicked: false},
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
                        {name: "[Google] Calendar", isClicked: false},
                        {name: "[Google] Chrome (all)", isClicked: false},
                        {name: "[Google] Contacts", isClicked: false},
                        {name: "[Google] Drive", isClicked: false},
                        {name: "[Google] Mail", isClicked: false},
                    ]
                },
                {
                    id: 'task4',
                    name: "Nowy miesiąc: Biznes",
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
                        {name: "Sprawdzić czy zgadza się kwota pracy za ostatni miesiąc z przelewem", isClicked: false},
                        {name: "Opłacić media, abonamenty i kredyty, pobrać faktury i potwierdzenia płatności, zapisać kwoty", isClicked: false},
                        {name: "Opłacić X", isClicked: false},
                        {name: "Zapisać pracę biorąc pod uwagę godziny", isClicked: false},
                        {name: "Uzupełnić kwoty z apki", isClicked: false},
                        {name: "Uzupełnić resztę kwot w arkuszu", isClicked: false},
                        {name: "Zapisać aktualną kwotę w następnym miesiącu po zapłaceniu faktur i opłat za ten miesiąc", isClicked: false},
                        {name: "Przeanalizować ostatni miesiąc", isClicked: false}
                    ]
                },
                {
                    id: 'task5',
                    name: "Nowy miesiąc: TODO",
                    links: [
                        {
                            name: "Sheets",
                            link: "https://docs.google.com/spreadsheets/d/1RS4WCPEqILRgId3JlfXZuRd_f6kWZtYg1hzfhM8Y4n8/edit#gid=82903271/"
                        },
                    ],
                    elements: [
                        {name: "Skopiować dwie pierwsze kolumny", isClicked: false},
                        {name: "Zmienić nazwę miesiąca", isClicked: false},
                        {name: "Zmienić kolor drugiej kolumny na czarny", isClicked: false},
                        {name: "Insert daty i ustawienie na 1 dzień", isClicked: false},
                        {name: "Pogrubić dzień i zastosować skrót ", isClicked: false},
                        {name: "Zaznaczyć pierwszy dzien -> Format -> Text rotation -> Rotate Up", isClicked: false},
                        {name: "Przeciągnąć dni do końca miesiąca", isClicked: false},
                        {name: "Wypełnić wzorcem wszystkie dni", isClicked: false},
                        {name: "Skopiować nie zaznaczony checkbox z któregoś pola", isClicked: false},
                        {name: "Zaznaczyć z ctrl wszystkie puste pola", isClicked: false},
                        {
                            name: "Wkleić wcześniej zaznaczonego checkboxa (nie wstawić, trzeba skopiować z innego pola checkbox i dopiero skopiować)",
                            isClicked: false
                        },
                        {name: "Formatowanie dat i checkboxów", isClicked: false},
                        {name: "Ukryć wiersze z czynności za poprzedni miesiąc", isClicked: false},
                        {name: "Ustawić kolor kolumny ze wzorem na biały", isClicked: false},
                        {
                            name: "Instrukcje z końca co do formatowania przekopiować niżej żeby nie przeszkadzały",
                            isClicked: false
                        },
                    ]
                },
                {
                    id: 'task6',
                    name: "Nowy miesiąc: Trening",
                    links: [
                        {
                            name: "Sheets",
                            link: "https://docs.google.com/spreadsheets/d/1RS4WCPEqILRgId3JlfXZuRd_f6kWZtYg1hzfhM8Y4n8/edit#gid=568847193/"
                        },
                    ],
                    elements: [
                        {name: "Wpisać nowy miesiąc i pogrubić", isClicked: false},
                        {name: "Insert daty i ustawienie na 1 dzień miesiąca", isClicked: false},
                        {name: "Sformatować datę używając pędzla i daty poprzedniej", isClicked: false},
                        {name: "Wstawić obok pusty checkbox", isClicked: false},
                        {name: "Przeciągnąć datę i checkbox do końca miesiąca", isClicked: false},
                        {name: "Skopiować formuły i pozamieniać zgodnie ze szkicem", isClicked: false},
                        {name: "Wstawić formułę do dni i przeciągnąć do końca miesiąca", isClicked: false},
                        {name: "Wstawić formuły zliczające", isClicked: false},
                        {name: "Skopiować szkic formuł do następnego miesiąca na dół", isClicked: false},
                        {name: "Szybka analiza miesiąca", isClicked: false},
                        {name: "Ukryć rekordy z poprzedniego miesiąca", isClicked: false},
                    ]
                },
                {
                    id: 'task7',
                    name: "Comiesięczne czynności",
                    links: [
                        {
                            name: "Docs",
                            link: "https://docs.google.com/document/d/1lKqrQYRtmsOP9UGHxnAQOOw01lfaMSjDvesVK4l-8wo/edit#heading=h.b36bz1pk3gth"
                        },
                    ],
                    elements: [
                        {name: "Przetestować czujki", isClicked: false},
                        {name: "Sprawdzić luzy i stan śrub w hulajnodze, dopompować dętki", isClicked: false},
                        {name: "Kupić potrzebne rzeczy z docsa", isClicked: false},
                        {name: "Przebadać się (p i j)", isClicked: false},
                    ]
                },
            ]
    };

    render() {
        return <div className="container">
            <Router>
                <div>
                    <nav>
                        <h2><Link to="/">{this.state.homePage}</Link></h2>
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
