import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advice: '',
        };
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            this.setState({ advice: response.data.slip.advice });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className='app'>
                <div className='card'>
                <h1 className='heading'>Advice</h1>
                <button className='button' onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
                <p>{this.state.advice}</p>
                </div>
            </div>
        );
    }
}

export default App;
