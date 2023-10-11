import React, { useEffect, useState } from 'react'
import { deskpc } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { handleAddItem, handleEdit } from '../store/reducers/booksReducers';
import axios from 'axios';
import Navbarr from './Navbar';

const BookList = () => {
    const books=useSelector((state)=>state.book.bookList);
    const book = useSelector((state) => state.book);
    const bookitm = useSelector((state) => state.book.item);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);

    const [update,setUpdate]=useState(bookitm);
    const [sortOrder, setSortOrder] = useState('asc');


    const handleToggleSort = (order) => {
        setSortOrder(order);
    };
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    
const handleChange = (e, key) => {
  const { value } = e.target;
  setUpdate(prevUpdate => ({ ...prevUpdate, [key]: value }));
}


    const handleSave = async (itm) => {
      const res = await axios.put(
        `http://localhost:5000/book/updateBook/${itm._id}`,
       {...update}
      );
      dispatch(handleEdit({ val: false, item: itm }));
    };
    useEffect(()=>{
      const getList=async()=>{
      const res= await axios.get("http://localhost:5000/book/getlist");
      dispatch(handleAddItem(res.data));
      setFilteredData(res.data);
      }
      getList();
    },[dispatch,bookitm])

    const handleDelete=async(id)=>{
      const res=await axios.delete(`http://localhost:5000/book/deleteFromList/${id}`);
      res.data && alert(res.data.msg);
      const deleted=sortedData.filter((itm)=>itm._id!==id);
      setFilteredData(deleted);
    }

    const handleEditt=(val,item)=>{
     setUpdate(item);
      dispatch(handleEdit({val:val,item:item}))
    }
    const handleFilter = (searchTerm) => {
      console.log(searchTerm)
      const filterData = books.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredData(filterData);
    };

    return (
      <><Navbarr onFilter={handleFilter}/>
        <Select onChange={(e) => handleToggleSort(e.target.value)}>
        <option value="select">Select</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </Select>
      <Section>

{sortedData.length === 0
      ? "No items match the search criteria"
      : sortedData.map((item) => {
          return (

            <InfoContainer>
              <Title style={{ color: "black" }}>{item.title}</Title>
              <Info>
                {Object.entries(item).map(([keys, val]) => {
                  return (
                    <Span key={keys}>
                      <b>{keys}: </b>
                      {book.isEdit && book.item?._id.toString() === item._id.toString() ?
                                    <Input
                                        onChange={(e) => handleChange(e, keys)}
                                        name={keys}
                                        value={update[keys]}
                                    />
                                    :
                                    <div>{val}</div>
                                }
                    </Span>
                  );
                })}
              </Info>
              <InfoBtn>
                <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                {book.isEdit && book.item._id === item._id ? (
                  <Button onClick={() => handleSave(item)}>Save</Button>
                ) : (
                  <Button onClick={() => handleEditt(true, item)}>
                    Edit
                  </Button>
                )}
              </InfoBtn>
            </InfoContainer>
          );
        })}


      </Section></>
        
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
    const Select=styled.select`
    padding: 10px 20px;
    font-weight: bold;
    margin: 20px 40px;
    outline: none;
    border-radius: 5px;
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
    const Input=styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
     background-color: white;
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
    
