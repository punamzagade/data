
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Store from './components/Store';
import ProductList from './components/container/ProductList';
import BookList from './components/BookList';




function App() {
  

 
  return (
    <BrowserRouter >
    <Routes>
   
     <Route path="/" element={ <Store/>}></Route>
     <Route path="/list" element={ <BookList/>}></Route>
      
        <Route path="/single/:id" element={<ProductList/>} />


        
</Routes>
</BrowserRouter>

  );
}

export default App;
