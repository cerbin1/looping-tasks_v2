import React, {Component} from "react";
import Element from "./Element";


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            elements: props.elements,
            links: props.links,
            index: 0
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleSpaceBarClick, false);
    }

    setElementClicked = (index) => {
        let elements = this.state.elements;
        elements[index].isClicked = !elements[index].isClicked;
        let autoClickedElementIndex = this.state.index;
        this.setState({
            elements: elements,
            index: ++autoClickedElementIndex,
        })
    };

    allElementsClicked = () => {
        return this.state.elements.every(value => value.isClicked)
    };

    autoClickNextElement = () => {
        if (!this.allElementsClicked()) {
            let elements = this.state.elements;
            let autoClickedElementIndex = this.state.index;
            elements[autoClickedElementIndex].isClicked = true;
            this.setState({
                elements: elements,
                index: ++autoClickedElementIndex,
            })
        }
    };

    handleSpaceBarClick = (event) => {
        if (event.keyCode === 32) {
            this.autoClickNextElement();
        }
    };

    render() {
        return (
            <div>
                <hr/>
                <div className="row">
                    <div className="col text-center mb-1">
                        <button className={"btn btn-success btn-lg"} onClick={this.autoClickNextElement}>Done</button>
                    </div>
                </div>
                {this.state.links == null ? null :
                    <div className="row">
                        <div className="col-xl-10 offset-1 text-center alert alert-primary">
                            {this.state.links.map((element, i) => {
                                return (<a className="alert-link" target="_blank" rel="noopener noreferrer"
                                           key={i} href={element.link}>{element.name} {i < this.state.links.length - 1  ? '||' : ''} </a>)
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
                        <h2 style={{color: this.allElementsClicked() ? 'green' : 'red'}}>{this.state.name}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;
