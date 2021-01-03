import React from 'react'
import axios from 'axios'

 export default class AnagramForm extends React.Component {
    state= {
        word1: '',
        word2: '',
        error: '',
        results: '',
        anagrams: ''
    };

    onWord1Change = (e) => {
        const word1 = e.target.value
        this.setState(() => ({word1}))
    };

    onWord2Change = (e) => {
        const word2 = e.target.value
        this.setState(() => ({word2}))
    };

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.word1 || !this.state.word2) {
            this.setState(() => ({error: '(ERROR: Please provide both words!)'}))
        } else {
            this.setState(()=> ({error: ''}))
            axios({
                method: 'POST',
                url: '/send',
                headers: {'content-type': 'application/json'},
                data: this.state
            })
            .then(result => {
                this.setState({
                    results: `${result.data}`,
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.error && <p>{this.state.error}</p>}  
                <form onSubmit={this.onSubmit}>
                    <h3>Please enter your words below and click on submit:</h3>
                    <div className="container__inputs">
                        Word 1:
                        <input 
                            type="text" 
                            placeholder="Enter first word"
                            autoFocus
                            value = {this.state.word1}
                            onChange={this.onWord1Change}
                        />
                        Word 2:
                        <input 
                            type="text" 
                            placeholder="Enter second word"
                            autoFocus
                            value = {this.state.word2}
                            onChange={this.onWord2Change}
                        />
                    </div>
                    <br/>
                    <button className="big-button">Submit</button>
                </form>
                {this.state.results === "false" && <p className="widget-header">{`Result: ${this.state.word1} and ${this.state.word2} are not Anagrams.`}</p>}
                {this.state.results === "true" && <p className="widget-header">{`Result: ${this.state.word1} and ${this.state.word2} are Anagrams.`}</p>}
            </div>
        )
    }
}