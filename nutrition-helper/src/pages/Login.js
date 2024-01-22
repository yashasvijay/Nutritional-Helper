import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css";
import { Component} from 'react';
import { Navigate, Link } from "react-router-dom";

class Login extends Component {

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

async addClick2(){
  const newUsers2 = document.getElementById("newUsers2").value;
  const newPass2 = document.getElementById("newPass2").value;
  const isDuplicate = this.state.items.some(item => item.username === newUsers2);
  const isDuplicate2 = this.state.items.some(item => item.password === newPass2);
  if (isDuplicate && isDuplicate2) {
    alert('Logged In!');
    <Navigate to="/home" replace={true} />
  }
  else {
    alert("Username/Password Not Found");
  }
}

async addClick(){
  const data=new FormData();

  var newUsers=document.getElementById("newUsers").value;
  data.append("newUsers",newUsers);

  var newPass=document.getElementById("newPass").value;
  data.append("newPass",newPass);

  const isDuplicate = this.state.items.some(item => item.username === newUsers);
  if(isDuplicate){
    alert("Username Taken");
  }
  else if(newUsers === "" || newPass ==="") {
    alert("Invalid Username/Password");
  }
  else {
    fetch("http://localhost:9000/additems",{
      method:"POST",
      body:data
    }).then(res=>res.json())
    .then((result)=>{
      alert(result);
      this.refreshItems();
    })
  }
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
      <div class="front-page">
        <h1>Welcome to Nutritional Helper!</h1>
        <section className="login-and-signup">
          <div className="signup-wrapper">
            <h2>SIGN UP</h2>
              <input id="newUsers" textAlign='center' placeholder="Enter Username"/>
              <br></br>
              <input id="newPass" textAlign='center' placeholder="Enter Password"/>
              <br></br>
              <button onClick={()=>this.addClick()}>Submit</button>
          </div>
          <div className="login-wrapper">
          <h2>LOG IN</h2>
              <input id="newUsers2" textAlign='center' placeholder="Enter Username"/>
              <br></br>
              <input id="newPass2" textAlign='center' placeholder="Enter Password"/>
              <br></br>
              <Link class="button" to="/home" onClick={()=>this.addClick2()} >Submit</Link>
          </div>
        </section>
      </div>
    );
  }
};

export default Login

/*
{items.map(item=>
  <p>
    <b>Username: {item.username} Password: {item.password}</b>&nbsp;
    <button onClick={()=>this.deleteClick(item.id)}>Delete</button>
  </p>
)}
*/