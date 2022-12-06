import { useState, useEffect } from 'react';
import axios from 'axios';//npm install axios in satpmclass-app
import {Link} from 'react-router-dom';

function Register() {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [register, setRegister] = useState([]);

    useEffect(() => {
        const url = 'http://localhost/reactass/fbdb.php';//this url is from the db.php file
        axios.get(url).then((response) => {
            setRegister(response.data);
            console.log(register);
        })
    }, []);

    const submitBtn = function (e) {
        e.preventDefault();
        let getData = new FormData();
        getData.append('firstname', firstname);//key-value pairs
        getData.append('lastname', lastname);//key-value pairs
        getData.append('username', username);
        getData.append('email', email);
        getData.append('password', password);
        getData.append('function', 'insert');
        axios({
            method: 'POST', // get or post
            url: 'http://localhost/reactass/fbdb.php',   //db link
            data: getData, //data to be transfered
            config: 'Content-Type="multipart/form-data"',
        }).then(function (result) {
            const url = 'http://localhost/reactass/fbdb.php';
            axios.get(url).then((response) => {
                setRegister(response.data);
                console.log(register);
                alert("Successfully Registered!");
            })
        });
    };

    // const deleteBtn = function (e) { 
    //     // alert(e.currentTarget.id);
    //     let getData = new FormData();
    //     getData.append('reg_id', e.currentTarget.id);
    //     getData.append('function', 'delete');
    //     axios({
    //         method: 'POST', // get or post
    //         url: 'http://localhost/reactass/fbdb.php',   //db link
    //         data: getData, //data to be transfered
    //         config: 'Content-Type="multipart/form-data"',
    //     }).then(function (result) {
    //         const url = 'http://localhost/reactass/fbdb.php';
    //         axios.get(url).then((response) => {
    //             setRegister(response.data);
    //             console.log(register);
    //         }).catch(function (error) {
    //             alert("failed");
    //             console.log(error);

    //         })
    //     })

    // }

    // const upBtn = function (e) {
    //     alert(e.currentTarget.title);
    //     let getData = new FormData();
    //     getData.append('reg_id', e.currentTarget.title);
    //     getData.append('firstname', document.getElementById('firstname' + e.currentTarget.title).value);
    //     getData.append('lastname', document.getElementById('lastname' + e.currentTarget.title).value);
    //     getData.append('username', document.getElementById('username' + e.currentTarget.title).value);
    //     getData.append('email', document.getElementById('email' + e.currentTarget.title).value);
    //     getData.append('password', document.getElementById('password' + e.currentTarget.title).value);
    //     getData.append('function', 'update');
    //     axios({
    //         method: 'POST',
    //         url: 'http://localhost/reactass/fbdb.php',
    //         data: getData,
    //         config: 'Content-Type="multipart/form-data"',
    //     }).then(function (result) {
    //         alert("success");
    //         console.log(result);

    //     }).catch(function (error) {
    //         alert("failed");
    //         console.log(error);

    //     })
    // }


    return (
        <div className='container mt-3 text-align-center'>
            <div>
                <h1>Register Here</h1>
                <form>
                    <label for="firstname">First Name</label>
                    <input type='text' className="form-control mb-3 w-100" placeholder="Enter First Name" name="firstname" required value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <label for="lastname">Last Name</label>
                    <input type='text' className="form-control mb-3 w-100" placeholder="Enter Last Name" name="lastname" required value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    <label for="username">Username</label>
                    <input type='text' className="form-control mb-3 w-100" placeholder="Enter Username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label for="email">Email</label>
                    <input type='text' className="form-control mb-3 w-100" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label for="lpassword">Password</label>
                    <input type='password' className="form-control mb-3 w-100" placeholder="Create Password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          
                    <input type='submit' class="btn btn-primary mb-3" onClick={submitBtn} /><br />
                </form>
            </div>
            <div>
                <p>Already registered? <Link to="/Login">Login here</Link></p>
            </div>
            {/* <div>
                <table class="table table-dark table-hover w-100">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Del</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>{register.map((val) => {
                        return (
                           
                                <tr key={val.reg_id}>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter First Name" defaultValue={val.firstname} id={'firstname' + val.reg_id} /></td>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter Last Name" defaultValue={val.lastname} id={'lastname' + val.reg_id} /></td>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter Username" defaultValue={val.username} id={'username' + val.reg_id} /></td>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter Email" defaultValue={val.email} id={'email' + val.reg_id} /></td>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter Password" defaultValue={val.password} id={'password' + val.reg_id} /></td>
                                    
                                    <td><button class="btn btn-primary mb-3" id={val.reg_id} onClick={deleteBtn}>D</button></td>
                                    <td><button class="btn btn-primary mb-3" title={val.reg_id} onClick={upBtn}>U</button></td>
                                </tr>
                            
                        );
                    })}

                    </tbody>
                </table>
            </div> */}
        </div>
    )
}

export default Register;