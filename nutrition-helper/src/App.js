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
    this.refreshItems2();
  }

async refreshItems2(){
  fetch("http://localhost:8000/getitems2").then(response=>response.json())
  .then(data2=>{
    this.setState({items:data2});
  })
}

async deleteClick2(id){
  fetch("http://localhost:8000/deleteitems2?id="+id,{
    method:"DELETE",
  }).then(res=>res.json())
  .then((result)=>{
    alert(result);
    this.refreshItems2();
  })
}

render() {
  const{items}=this.state;
  return (
    <div className="App">
      <h2>Database</h2>
      <br></br>
      {items.map(item=>
        <p>
          <b> Name: {item.name}
              Calories: {item.calories}
              Fat: {item.fat}
              Cholesterol: {item.cholesterol}
              Sodium: {item.sodium}
              Carbohydrate: {item.carbohydrate}
              Sugar: {item.sugar}
              Protein: {item.protein}
              Iron: {item.iron}
              Potasium: {item.potasium}
          </b>&nbsp;
          <button onClick={()=>this.deleteClick2(item.id)}>Delete</button>
        </p>
      )}

    </div>
  );
}
}

export default App;
