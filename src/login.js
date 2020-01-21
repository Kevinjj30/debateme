import React, {Component} from 'react';
import fire from './config/fire';

class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handlechange= this.handlechange.bind(this);
        this.Signup=this.Signup.bind(this);
        this.state={
            email:'',
            password:''
        }

    }

login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then ((u)=> {

    }).catch((error) =>{
        console.log(error);
    });
}

Signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) =>{
        console.log(error);
    });
}


handlechange(e) {
    this.setState({[e.target.name]: e.target.value});
}

 render(){
        return (
            <div class="body">
                <h1>Debate Me</h1>
            <div className= "col-md-6">
                <form>
                <div class= "form-group">
                    <label for="exampleInputEmail1">Email Address</label>
                    <input value ={this.state.email} onChange={this.handlechange} type = "email" name="email"
                    class ="form-control" id="exampleInputEmail1" aria-describedby= "emailHelp"
                    placeholder= "Enter email"/>
                    <small id ="emailHelp" class = "form-text text-muted">We'll never share your email with anyone else</small>
                    </div>
                    <div class="form-group">
                        <label for= "exampleinputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handlechange} type = "password"
                        name="password" class="form-control" id="exampeInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" onClick={this.login} class ="btn btn-primary">Login</button>
                        <button onClick={this.signup} style={{marginLeft: '25px'}} class= "btn btn-success">Signup</button>
                        </form>



            </div>
</div>




        );
    }
}


export default Login;