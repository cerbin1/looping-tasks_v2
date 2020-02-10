import React, {Component} from "react";
import Element from "./Element";


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = props;
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
                <h1 style={{color: this.allElementsClicked() ? 'green' : 'red'}}>{this.state.name}</h1>

                {this.state.elements.map((element, i) => {
                    return <Element setElementClicked={this.setElementClicked}
                                    index={i}
                                    key={i}
                                    name={element.name}
                                    isClicked={element.isClicked}/>
                })}

            </div>
        )
    }
}

export default Task;
