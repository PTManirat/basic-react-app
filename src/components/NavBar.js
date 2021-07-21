import React from "react"
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
// import { UserStoreContext } from '../context/UserContext'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../redux/actions/authAction'

const NavBar = () => {

  const history = useHistory()
  // const [profile, setProfile] = React.useState(null)
  // const userStore = React.useContext(UserStoreContext)

  //redux
  const profileRedux = useSelector((state) => state.authReducer.profile)
  const dispatch = useDispatch()
  const cartRedux = useSelector((state) => state.cartReducer.total)
  // <-------------------- context section ------------------------>
  // const getProfile = () => {

  //   const profileVal = JSON.parse(localStorage.getItem('profile')) 

  //   // if(profileVal){
  //   //   setProfile(profileVal)
  //   // }

  //   //update data from localStorage to context
  //   if(profileVal){
  //     userStore.updateProfile(profileVal)
  //   }

  // } 

  // React.useEffect(() => {
  //   getProfile()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])
  // <-------------------- context section ------------------------>

  // <-------------------- Redux section ------------------------>
    const getProfile = () => {

      const profileVal = JSON.parse(localStorage.getItem('profile')) 

      if(profileVal){
        dispatch(updateProfile(profileVal))
      }

    } 

    React.useEffect(() => {
      getProfile()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  // <-------------------- Redux section ------------------------>

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    history.replace('/')
    // history.go(0)
    // userStore.updateProfile(null)
    dispatch(updateProfile(null))
  }

  return (
    <>
      <Navbar bg="warning" expand="lg">
        <Navbar>
          <NavLink className='navbar-brand' to='/' exact>
            <img
                alt="WebTestLogo"
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Web Test
          </NavLink>
          {/* <Navbar.Brand href="#home">
            <img
              alt="WebTestLogo"
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Web Test
          </Navbar.Brand> */}
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className='nav-link' to='/' activeClassName='active' exact>
              Home
            </NavLink>

            <NavLink className='nav-link' to='/product' activeClassName='active'>
              Products
            </NavLink>
            
            <NavLink className='nav-link' to='/about' activeClassName='active'>
              About
            </NavLink>

            <NavLink className='nav-link' to='/cart' activeClassName='active'>
              Shopping Cart { cartRedux && cartRedux } items
            </NavLink>

            <NavDropdown title="Workshop (Pagination + CRUD)" id="basic-nav-dropdown">

              <NavDropdown.Item 
                onClick={() => {
                  history.replace('/hospital')
                }}
              >
                Hospital Detail (Pagination)
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item 
                onClick={() => {
                  history.replace('/category')
                }}
              >
                News Category (CRUD)
              </NavDropdown.Item>

            </NavDropdown>

            <NavLink className='nav-link' to='/upload' activeClassName='active'>
              Upload
            </NavLink>

            <NavLink className='nav-link' to='/member' activeClassName='active'>
              Member
            </NavLink>

            <NavLink className='nav-link' to='/chart' activeClassName='active'>
              Chart Report
            </NavLink>
          </Nav>

          {/* use context */}
          {/* {
            userStore.profile ? (
              <span className="navbar-text">
                Welcome : {userStore.profile.name}
                <Button className="ml-2" variant="outline-danger" onClick={logout}>
                  Log Out
                </Button>
              </span>
            ) : (
              <Nav>
                <NavLink className='nav-link' to='/register' activeClassName='active'>
                  Register
                </NavLink>
                <NavLink className='nav-link' to='/login' activeClassName='active'>
                  Log In
                </NavLink>
              </Nav>
            )
          } */}

          {
            profileRedux ? (
              <span className="navbar-text">
                Welcome : {profileRedux.name}
                <Button className="ml-2" variant="outline-danger" onClick={logout}>
                  Log Out
                </Button>
              </span>
            ) : (
              <Nav>
                <NavLink className='nav-link' to='/register' activeClassName='active'>
                  Register
                </NavLink>
                <NavLink className='nav-link' to='/login' activeClassName='active'>
                  Log In
                </NavLink>
              </Nav>
            )
          }

        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
