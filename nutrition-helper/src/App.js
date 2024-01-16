import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component{

  constructor(props){
    super(props);
    this.state={
      items:[]
    }
  }

  componentDidMount(){
    this.refreshItems();
  }

  async refreshItems(){
    fetch("http://localhost:9000/getitems").then(response=>response.json())
    .then(data=>{
      this.setState({items:data});
    })
  }

async addClick(){
  const data=new FormData();

  var newItems=document.getElementById("newItems").value;
  data.append("newItems",newItems);
  
  var newCals=document.getElementById("newCals").value;
  data.append("newCals",newCals);

  fetch("http://localhost:9000/additems",{
    method:"POST",
    body:data
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshItems();
  })
}

async deleteClick(id){
  fetch("http://localhost:9000/deleteitems?id="+id,{
    method:"DELETE",
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshItems();
  })
}

render() {
  const{items}=this.state;
  return (
    <div className="App">
      <h2>DATABASE</h2>
        <input id="newItems" placeholder="Enter Name of Food"/>
        <br></br>
        <input id="newCals" placeholder="Enter Calories"/>
        <br></br>
        <button onClick={()=>this.addClick()}>Submit</button>
      {items.map(item=>
        <p>
          <b>Name: {item.name}... Calories: {item.calories}</b>&nbsp;
          <button onClick={()=>this.deleteClick(item.id)}>Delete</button>
        </p>
      )}
    </div>
  );
}
}

export default App;
