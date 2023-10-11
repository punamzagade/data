import React, {useState } from 'react';
import styled from 'styled-components';
import { mobi, mobitab, slidermob } from '../responsive';
import { NavLink } from 'react-router-dom';



function Navbarr(props) {
const [searchValue, setSearchValue] = useState("");
const handleChange=(e)=>{
  console.log(e.target.value)
  setSearchValue(e.target.value);
  props.onFilter(e.target.value);
}
  return (
    <>
      <Wrapper >
      <Menul>
        <H1>Logo</H1>
        </Menul>
        <Menur>
          <SearchBar>
            <Input type="text" placeholder="Search..." value={searchValue} onChange={handleChange}/>
            <Button>search</Button>
          </SearchBar>
          {/* <Account > */}
          
          <Cart>
          <NavLink to="/" className={"LINK"}>
          <CartText>STORE</CartText>
          </NavLink>
          <NavLink to="/list" className={"LINK"}>
          <CartText>BOOKLIST</CartText></NavLink>
          {/* <CartCount>{cart.length}</CartCount> */}
          </Cart>
         {/* </Account>  */}
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
margin-left: 20px;
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

const Cart=styled.div`
display: flex;
align-items: center;
justify-content: end;
gap: 20px;
flex: 1;
cursor: pointer;
${mobitab({marginLeft:"20px"})}
${slidermob({marginLeft:"10px",justifyContent: "center"})}
`;
const CartText=styled.span`
  position: relative;
  padding: 5px;
&::after{
 content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: white;
        transition: width 0.3s;
}
&:hover::after {
        width: 100%;
      }
/* ${mobitab({fontSize:"18px"})} */
`;
