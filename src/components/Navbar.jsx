import React, { useContext,useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
// import CartContext from '../../ItemStore/Context';
import { mobi, mobitab, slidermob } from '../responsive';
import { NavLink } from 'react-router-dom';
// import "../../App.css";
// import LoginContext from '../../Auth/LoginContext';


function Navbarr(props) {
//  let {cart}=useContext(CartContext);
// const loginCtx=useContext(LoginContext);
// const isLoggedIn=loginCtx.isLoggedIn
const [searchValue, setSearchValue] = useState("");
const handleChange=(e)=>{
  setSearchValue(e.target.value);
  props.onFilter(e.target.value);
}

// const handleLogout=()=>{
//   cart=[];
//   loginCtx.logout();
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (searchValue === '') {
//     filteredData = productsArr;
//   } else {
//     filteredData = productsArr.filter((item) =>
//       item.title.toLowerCase().includes(searchValue.toLowerCase())
//     );
//   }
// }
  return (
    <>
      <Wrapper >
      <Menul>
        <H1>Logo</H1>
        {/* <Menu>
        {/* <NavLink className={"LINK"} to="/"> */}
          {/* <List>HOME</List> */}
          {/* </NavLink> */}
           
        {/* </Menu> */}
        </Menul>
        <Menur>
          <SearchBar>
            <Input type="text" placeholder="Search..." value={searchValue} onChange={handleChange}/>
            <Button>search</Button>
          </SearchBar>
          <Account >
            {/* {isLoggedIn && (
              <NavLink className={"LINK"} to="/login">
                <Span onClick={handleLogout}>LOGOUT</Span>
              </NavLink>
              )} */}
              
             
              
              {/* { !isLoggedIn && (<><NavLink className={"LINK"} to="/login">
                <Span onClick={loginCtx.login}>LOGIN</Span>
              </NavLink> */}
              {/* <NavLink className={"LINK"} to="/register">
              <Span onClick={loginCtx.login}>REGISTER</Span>
            </NavLink> */}
      
              {/*  )} */}
              {/* <NavLink className={"LINK"} to="/cart"> */}
          <Cart>
          <CartText>STORE</CartText>
          <NavLink to="/list">
          <CartText>BOOKLIST</CartText></NavLink>
          {/* <CartCount>{cart.length}</CartCount> */}
          </Cart>
          {/* </NavLink> */}
         </Account> 
        </Menur>
      </Wrapper>
      </>
  );
}

export default Navbarr;
 

const Wrapper=styled.header`
background-color: black;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 50px;
width: 100%;
position: sticky;
top: 0;
z-index: 999;
overflow: hidden;
${mobitab({padding:"12px 20px"})};
${slidermob({fontSize:"small",padding:"12px 5px"})}
`;
const Menul=styled.div`
display: flex;
flex: 1;
margin-right: 30px;
${mobitab({flexDirection: "column"})};
${slidermob({marginRight:"10px"})}
`;
const H1=styled.h1`
font-size: 40px;
margin-right: 50px;
${mobitab({margin:"0px 50px 10px 20px"})}
${slidermob({fontSize:"30px",margin:"0px 30px 10px 10px"})}
`;

const Menu=styled.ul`
display: flex;
justify-content: start;
align-items: center;
list-style: none;
flex: 1;
`;
const List=styled.li`
margin-right:30px;
cursor: pointer;
${slidermob({marginRight:"15px"})}
`;
const Menur=styled.div`
display: flex;
flex: 2;
${mobitab({flexDirection: "column"})}
`;
const SearchBar=styled.form`
position: relative;
display: flex;
justify-content: end;
flex: 1;
${mobitab({margin:"0px 20px 10px 0px"})}
${slidermob({margin:"0px 20px 10px 0px"})}
`;
const Input=styled.input`
width: 100%;
padding: 7px;
border-radius: 5px;
border: none;
outline: none;
${slidermob({padding:"5px"})}
`;
const Button=styled.button`
position: absolute;
padding: 7px;
border-radius: 5px;
border: none;
outline: none;
cursor: pointer;
${slidermob({padding:"5px"})}
`;
const Account=styled.div`
display: flex;
align-items: center;
justify-content: end;
flex: 1;
${mobitab({marginBottom:"-13px"})}
${slidermob({marginBottom:"-7px"})}
`;
const Span=styled.span`
margin-left: 30px;
cursor: pointer;
${mobitab({marginLeft:"20px"})}
${slidermob({marginLeft:"15px"})}
`;
const Cart=styled.div`
display: flex;
align-items: center;
gap: 30px;
cursor: pointer;
${mobitab({marginLeft:"20px"})}
${slidermob({marginLeft:"10px"})}
`;
const CartText=styled.span`
/* ${mobitab({fontSize:"18px"})} */
`;
const CartCount=styled.span`
display: flex;
justify-content: center;
align-items: center;
margin: -5px 0px 10px -5px;
padding: 3px;
height: 14px;
width: 14px;
color: black;
font-weight: bold;
font-size: 14px;
border-radius: 50%;
background-color: white;
${mobi({margin: "-5px 0px 10px -8px"})}
`;
const Container=styled.div`
background-color: gray;
color: white;
padding: 30px;
display: flex;
font-size: 70px;
align-items: center;
justify-content: center;
font-weight: bold;
margin-top: 2px;
${slidermob({fontSize:"40px"})}
`;