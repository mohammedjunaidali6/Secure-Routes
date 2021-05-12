import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header'

function Register(){

    useEffect(()=>{
        if(localStorage.getItem('user-info'))   
            {
                history.push("/add")
            }
    }, [])

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history=useHistory();

   async function signUp(){
    
        let item={name,password,email}
        console.log(item)
        let result = await fetch(" http://localhost:3004/register",{
            method: 'POST',
            body:JSON.stringify(item),
            headers: {
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push('/add')
    }


    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
            <br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}
export default Register;