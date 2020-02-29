import React from 'react';
import './App.css';
import Tasks from './components/Tasks'

function App() {
    return (
        <div className="App">
            <button className="button-success pure-button">Success Button</button>
            <button className="button-error pure-button">Error Button</button>
            <button className="button-warning pure-button">Warning Button</button>
            <button className="button-secondary pure-button">Secondary Button</button>

            <Tasks/>
        </div>
    );
}

export default App;
