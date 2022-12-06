import { useState, useEffect } from 'react';
import axios from 'axios';//npm install axios in satpmclass-app
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
   // const [login, setLogin] = useState([]);
    const [fbdb, setFbdb] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        const url = 'http://localhost/reactass/fbdb.php';//this url is from the db.php file
        axios.get(url).then((response) => {
            setFbdb(response);
            fbdb.map((val)=>{
                return(
                    console.log(val,username)
                )
            })
            //setLogin(response.data);
            //console.log(login);
        })
    }, []);

    const submitBtn = function (e) {
        e.preventDefault();
        let getData = new FormData();
        getData.append('username', username);
        getData.append('password', password);
        getData.append('function', 'select');
        axios({
            method: 'POST', // get or post
            url: 'http://localhost/reactass/fbdb.php',   //db link
            data: getData, //data to be transfered
            config: 'Content-Type="multipart/form-data"',
        }).then(function (result) {
            const url = 'http://localhost/reactass/fbdb.php';
            axios.get(url).then((response) => {
                setFbdb(response.data);
                //console.log(login);
                fbdb.map((val)=>{
                if ((val.username) === (document.getElementById('username').value) && (val.password) === (document.getElementById('password').value)
                    ){
                    return(
                        alert ('Successfully Logged In!'),
                        navigate ('/User')
                    )}else{
                        return(
                            alert ('Log in Failed!')
                        )
                    };
                })
            })
        });
    };


    return (
      <center>
        <div className='container mt-3 mx-auto'>
            <div>
                <h1>Login Here</h1>
                <form>
                    <label clas for="username">Username</label>
                    <input type='text' className="form-control mb-3 w-50" placeholder="Enter Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label for="password">Password</label>
                    <input type='password' className="form-control mb-3 w-50" placeholder="Create Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
                    <input type='submit' class="btn btn-primary mb-3" onClick={submitBtn} /><br />
                </form>
            </div>
            <div>
                <p>Not yet registered? <Link to="/Register">Register here</Link></p>
            </div>
            <div>
                <p><Link to="/User">User Home</Link></p>
            </div>
            {/* <div>
                <table class="table table-dark table-hover w-100">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>{login.map((val) => {
                        return (
                                <tr key={val.reg_id}>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter Username" defaultValue={val.username} id={'username' + val.reg_id} /></td>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter Password" defaultValue={val.password} id={'password' + val.reg_id} /></td>
                                </tr>
                            
                        );
                    })}

                    </tbody>
                </table>
            </div> */}
        </div>
        </center>
    )
}

export default Login;