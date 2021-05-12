import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';


function Header(){

    let user=JSON.parse(localStorage.getItem('user-info'))
    const history= useHistory();
function Logout(){
    localStorage.clear();
    history.push('./register')
}

    return(
        <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto navbar_warapper">
        {
            localStorage.getItem('user-info') ?
            <>
             <Link to="/add">AddProduct</Link>
             <Link to="/update">UpdateProduct</Link>
            </>
            :
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
        }
    </Nav>
    {localStorage.getItem('user-info') ?
    <Nav>
        
        <NavDropdown title={user && user.name}>
            <NavDropdown.Item onClick={Logout}>LogOut</NavDropdown.Item>
        </NavDropdown>
    </Nav>
   :null
    }
  </Navbar>
  
        </div>
    )
}
export default Header;