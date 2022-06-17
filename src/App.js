import React,{Component} from 'react';
import './App.css';

class App extends Component{
    state={// state is an object
        arr: [],
        arrSteps: [],
        colrKey:[],
        colrSteps:[],
        currSteps:0,
        cnt:0,
        delay:100,
        algorithm:'',
        timeouts: [],
    
    };

    // function to generate an random array
    generateRandomNum=(min, max)=>{
        return Math.floor(Math.random() * (max-min)+min);
    }
    generateArray(){
        const count=this.state.count;
        const temp =new Arrra();// empty array

    }
    render(){
        return (
            <div className='app'>
            <h1> Hello World</h1>
            </div>
      );
    }
}

export default App;
