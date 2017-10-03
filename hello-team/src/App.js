import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          position="static"
          color="default"
          title="Hello Team!"
          showMenuIconButton={false}
        />
        <Card>
          <CardHeader
            title="Eugene Lim"
            subtitle="SWUG"
            avatar="https://scontent.fbed1-2.fna.fbcdn.net/v/t31.0-8/22051194_386103871822826_2278052418630848474_o.jpg?oh=a5c44be6d4e55aabc90888d05b11cd31&oe=5A86B375"
          />
          <CardText>
            Welcome to Code4Good! Let me know what you know by filling out the form below.
          </CardText>
          <CardActions>
            <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSeD4ESvcUyj4QORh0kqKfVyFJXK9gV9EGAD-TChTqs6w3maTQ/viewform?embedded=true" width="100%" overflow="hidden" height="1200px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default App;
