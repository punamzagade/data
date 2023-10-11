import { configureStore } from "@reduxjs/toolkit";
import booksReducers from "./reducers/booksReducers";

const Store=configureStore({reducer:{book:booksReducers}})


export default Store;