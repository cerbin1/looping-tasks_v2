import React, {Component} from "react";
import Element from "./Element";


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            elements: props.elements,
            links: props.links
        };
    }

    setElementClicked = (index) => {
        let elements = this.state.elements;
        elements[index].isClicked = !elements[index].isClicked;
        this.setState({
            elements: elements
        })
    };

    allElementsClicked = () => {
        return this.state.elements.every(value => value.isClicked)
    };

    render() {
        return (
            <div>
                <hr/>
                {this.state.links == null ? null :
                    <div className="row">
                        <div className="col-xl-10 offset-1 text-center alert alert-primary">
                            {this.state.links.map((element, i) => {
                                return (<a className="alert-link" target="_blank" rel="noopener noreferrer"
                                           key={i} href={element.link}>{element.name} || </a>)
                            })}
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="btn-group-vertical col-xl-10 offset-1">
                        {this.state.elements.map((element, i) => {
                            return <Element setElementClicked={this.setElementClicked}
                                            index={i}
                                            key={i}
                                            name={element.name}
                                            isClicked={element.isClicked}/>
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-10 offset-1 text-center">
                        <h1 style={{color: this.allElementsClicked() ? 'green' : 'red'}}>{this.state.name}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;
