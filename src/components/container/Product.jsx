
import React from "react";
import styled from "styled-components";
import { deskpc } from "../../responsive";
import "../../App.css";
import { useDispatch} from "react-redux";
import axios from "axios";


const Product = (item) => {

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
                {val}
              </Span>
            );
          })}
        </Info>
        <InfoBtn>
          <Button onClick={() => handleAddBook(item)}>
            Add to Books List
          </Button>
         
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
