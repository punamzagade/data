
import React, { useContext } from "react";
import styled from "styled-components";
import { deskpc } from "../../responsive";
import "../../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAddItem, handleEdit } from "../../store/reducers/booksReducers";
import axios from "axios";


const Product = (item) => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleSave = async (itm) => {
    const res = await axios.put(
      `http://68.178.162.203:8080/application-test-v1.1/books/${itm.id}`,
      itm
    );
 

    // Dispatch an action to update the Redux store with the edited book
    dispatch(handleEdit({ val: false, item: itm }));
  };

  const handleAddBook=async(item)=>{
    const res=await axios.post("http://localhost:5000/book/create",item);
     res.data && alert(res.data.msg);
  }

  return (
    <Section>
      <InfoContainer>
        <Title style={{ color: "black" }}>{item.title}</Title>
        <Info>
          {Object.entries(item).map(([keys, val]) => {
            return (
              <Span key={keys}>
                <b>{keys}: </b>
                <input
                  defaultValue={val}
                  disabled={book.isEdit && book.item.id === item.id ? false : true}
                />
              </Span>
            );
          })}
        </Info>
        <InfoBtn>
          <Button onClick={() => handleAddBook(item)}>
            Add to Books List
          </Button>
          {book.isEdit && book.item.id === item.id ? (
            <Button onClick={() => handleSave(item)}>Save</Button>
          ) : (
            <Button onClick={() => dispatch(handleEdit({ val: true, item: item }))}>
              Edit
            </Button>
          )}
        </InfoBtn>
      </InfoContainer>
    </Section>
  );
};


export default Product;

const Section = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
gap: 20px;
border: 1px solid gray;
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
