import React, {Component} from 'react';
import Quotebox from './components/Quotebox';
import Container from 'react-bootstrap/Button';
import './App.scss';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      author: ''
    };
  }

 componentDidMount(){
  this.getQuote();
 }

  getQuote = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")

    .then(response => response.json())

    .then(data => {
      console.log(data)
      this.setState({author: data.author})
      this.setState({text: data.en})
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App pt-5" style={{minHeight: '100vh'}}>
        <main className="Container" >
          <h1 className="">Awesome random programmer quotes</h1>
          <Quotebox onClick={this.getQuote} text={this.state.text} author={this.state.author} tweet={this.state.tweet}/>
        </main>
      </div>
    );
  }
}

export default App;
