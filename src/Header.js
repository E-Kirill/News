import React, { Component } from 'react';
import './header.css';



class Header extends Component{
    constructor(props){
        super(props);
        this.state = {isOpened : false};
        this.input = <div></div>;
        this.inputForm = (
            <div className="inputForm">
                <input type="text" placeholder="title" ref={(input)=>this.InputTitle = input} /><br />
                <textarea placeholder="text" rows="10" ref={(input)=>this.InputDescription = input} ></textarea><br />
                <button onClick={this.AddingNews.bind(this)}> add new </button>
            </div>
        );
    }

    AddingNews(){
        this.props.addNews(this.InputTitle.value, this.InputDescription.value);
        this.InputTitle.value = ""; 
        this.InputDescription.value = "";
    }

    AddNews(){
        if(!this.state.isOpened){
            this.input = this.inputForm;
        }
        else{
            this.input = <div></div>;
        }
        this.setState({ isOpened: !this.state.isOpened});
    }

    render(){
        return(
            <div className="header">
                <button onClick={ this.AddNews.bind(this)}>
                + add news
                </button>
                {this.input}
            </div>
        );
    }
}

export default Header;