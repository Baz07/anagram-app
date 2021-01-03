import React from 'react'
import axios from 'axios'

export default class Top10Anagrams extends React.Component {
    state = {
        anagramPairs: []
    }

    async componentDidMount() {
        try {
            setInterval(async () => {
                axios({
                    method: 'POST',
                    url: '/top',
                    headers: {'content-type': 'application/json'},
                    data: this.state
                })
                .then(res => {
                    this.setState({anagramPairs: res.data})        
                })
            }, 10)}
            catch(e) {
                console.log(e);
              } 
    }

    render () {
        return (
            <div className="container">
            <div className="container__top">
                <h2 className = "container__header">List of Top 10 Anagrams Requests</h2>
                {this.state.anagramPairs.length === 0 && <p className="container__nosearch">No Search has been made yet!</p>}
                <div>
                    {this.state.anagramPairs !== [] && <p>{this.state.anagramPairs.map((item, index) => <li key={item} className="option"> {index + 1}. {item[0]}, {item[1]} </li>)}</p>}
                </div>
            </div>
            </div>

        )
    }
}






















// function App() {

//     useEffect(() => {
//         fetch('/top').then(response => 
//             response.json().then(data => {
//                 console.log(data)
//         }))
//     })

//     return (
//         <div>
//             Top 10
//         </div>
//     )
// }

// export default App

