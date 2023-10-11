import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductList from "../components/container/ProductList";
import Navbarr from "../components/Navbar";
import { deskpc, slidermob } from "../responsive";
import "../App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../store/reducers/booksReducers";

const Store = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Adjust as needed

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books"
      );
      dispatch(getAllBooks(res.data.data));
      setFilteredData(res.data.data);
    };
    getBooks();
  }, [dispatch]);

  const handleFilter = (searchTerm) => {
    const filterData = books.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filterData);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <Navbarr onFilter={handleFilter} />
      <Container>
        <Div>
        <AlbumTitle>Book Store</AlbumTitle>
        <Pagination>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </Pagination>
        </Div>
        <Wrapper>
          <ProductList
            filteredData={filteredData}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
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
  ${slidermob({margin:"0px"})}
`;
const Div = styled.div`
display: flex;
align-items: center;
gap:20px;
margin-bottom: 40px;
${slidermob({flexDirection:"column"})}
`;
const AlbumTitle = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;

`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  ${deskpc({ margin: "2%" })};
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 10px;
  }
`;
