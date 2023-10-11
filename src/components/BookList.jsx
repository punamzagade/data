import React, { useEffect } from 'react'
import { deskpc } from "../responsive";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { handleAddItem } from '../store/reducers/booksReducers';
import axios from 'axios';

const BookList = () => {
    const books=useSelector((state)=>state.book.bookList);
    const dispatch = useDispatch();
    useEffect(()=>{
      const getList=async()=>{
      const res= await axios.get("http://localhost:5000/book/getlist");
      dispatch(handleAddItem(res.data))
      }
      getList();
    },[dispatch])
    return (
  
        <Section>
        {books && books.map((item)=>{
            return(
<InfoContainer>
          <Title style={{color:"black"}}>{item.title}</Title>
          <Info>
          <Span><b>AUTHOR : </b>{item.author}</Span>
          <Span><b>COUNTRY : </b>{item.country}</Span>
          <Span><b>LANGUAGE : </b>{item.language}</Span>
          <Span><b>LINK : </b>{item.link}</Span>
          <Span><b>YEAR : </b>{item.year}</Span>
          <Span><b>ID : </b>{item.id}</Span>
          </Info> 
          <InfoBtn>
                {/* <Button onClick={()=>dispatch(handleAddItem({item}))}>Add to Books List</Button> */}
           <Button>Delete</Button></InfoBtn>
          </InfoContainer>
            )
        })}
          
            
        </Section>
        
      );
    };
    
    export default BookList

    const Section = styled.section`
    display: flex;
    justify-content: center;
  flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
     ${(deskpc({ margin: "30px" }))};
    `;
    const Title = styled.h2`
    text-align: center;
    `;
    
    const InfoContainer=styled.div`
    display: flex;
    gap:20px;
    flex-direction: column;
    width: 300px;
    border: 1px solid gray;
    padding: 20px;
    `;
    
    const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    `;
    
    const InfoBtn = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    `;
    const Span = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
    `;
    const Button = styled.button`
    color: white;
    background-color: #4590d2;
    border: none;
    padding: 10px;
    flex: 1;
    border-radius: 7px;
    cursor: pointer;
    `;
    
