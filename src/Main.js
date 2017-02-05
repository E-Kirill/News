import React, { Component } from 'react';
import './main.css';

var that;

class Main extends Component{
    constructor(props) {
        super(props);
        this.Change = this.Change.bind(this);
        this.Delete = this.Delete.bind(this);
        that = this;
        this.state = { isEditMode: false };
    }
    Search(event){
        console.log(event.target.value);
        
    }

    EditNews(){

    }

    Change(event){
        var title = document.getElementById('title-'+event.target.id).innerHTML;
        var description = document.getElementById('description-'+event.target.id).innerHTML;

        /*
        document.getElementById('post'+event.target.id).innerHTML =
        "<div id='eform'><input type='text' id='etitle' value = "+title+"/><br />"+
        "<textarea id='edescription'>"+description+"</textarea><br />"+
        "<button onClick=''>ok</button></div>";
        */
        //this.props.changeNews(title, description, event.target.id);
    }
    
    Delete(event){
        this.props.deleteNews(event.target.id);
    }

    render(){
        return(<div>
            <div className="search">
                <input type='text' placeholder='Search...' onChange={this.Search.bind(this)} />                
            </div>
            <div className='Main'>
                <div >
                    {this.props.items.map(function(item, i){
                    return (<div className={'post'} id={'post'+i} key={i} >
                            <div className="text">
                                <b><div key="title-{i}" id={'title-'+i}>{item.title}</div></b><br />
                                <div key="description-{i}" id={'description-'+i}>{item.description}</div><br />
                                <button className="editBtn" onClick={that.Change} id={i}>Change</button>
                                <button className="deleteBtn" onClick={that.Delete} id={i}>Delete</button>
                                <div key="date-{i}" className='date'>{item.date}</div>
                            </div>
                        </div>);
                    })}
                </div>
            </div></div>
        );
    }
}

export default Main;
