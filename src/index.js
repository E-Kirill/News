import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import{ createStore } from 'redux';
import App from './App';
import './index.css';

var arr = [
  {title:"title",
   description:'smth interesting',
    date:'02.05.2016 14:42'
  },
  {title:"title2",
   description:'text example text example text example text example text example ',
    date:'07.04.2016 15:42'
  },
  {title:"title3",
   description:'smth interesting',
    date:'01.03.2013 4:42'
  }
];

//reducer
function news(state = arr, action){
  switch(action.type){
    case 'ADD_NEWS':
      var elem = {
        title: action.title,
        description: action.description,
        date: Date.now()
      };
      return [elem, ...state];

    case 'DELETE_NEWS':
      state.splice(action.id, 1);
      return [...state];

    case 'CHANGE_NEWS':
      state[action.id].title = action.title;
      state[action.id].description = action.description;
      state[action.id].date = Date.now();
      return [...state];

    default:
      return state;
  }
}

const store = createStore(news, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(function(){
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider >,
  document.getElementById('root')
);
