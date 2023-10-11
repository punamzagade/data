import React, { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ProductList from "../components/container/ProductList";
import Navbarr from "../components/Navbar";
import { deskpc } from "../responsive";
import "../App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks} from "../store/reducers/booksReducers";
// import CartContext from "../ItemStore/Context";

const Store = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get("http://68.178.162.203:8080/application-test-v1.1/books");
      console.log(res.data.data);
      dispatch(getAllBooks(res.data.data));
      setFilteredData(res.data.data);
     
    }
    getBooks();
  }, [dispatch]);

  const handleFilter = (searchTerm) => {
    const filterData = books.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filterData);
  };
  return (
    <>
      <Navbarr onFilter={handleFilter} />
      <Container>
        <AlbumTitle>Book Store</AlbumTitle>
        <Wrapper>
            <ProductList filteredData={filteredData}/>
        </Wrapper>
      </Container>
    </>
  );
};

export default Store;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
`;

const AlbumTitle = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  margin-bottom: 40px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  ${deskpc({ margin: "2%" })};
`;
const Button = styled.button`
  background-color: gray;
  font-weight: bold;
  color: #31b8de;
  outline: none;
  font-size: 18px;
  padding: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
