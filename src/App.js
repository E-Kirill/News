import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header addNews={this.props.onAddNews} />
        <Main items={this.props.store}  changeNews={this.props.onChangeNews} deleteNews={this.props.onDeleteNews} />
      </div>
    );
  }
}

export default connect(
  state=> ({
    store: state
  }),
  dispatch=> ({
    onAddNews:(title,description)=>{
      dispatch({ type: 'ADD_NEWS', title: title, description: description});
    },
    onChangeNews:(title, description, id)=>{
      dispatch({ type: 'CHANGE_NEWS', title: title, description: description, id: id});
    },
    onDeleteNews:(id)=>{
      dispatch({ type: 'DELETE_NEWS', id: id});
    }
  })
)(App);
