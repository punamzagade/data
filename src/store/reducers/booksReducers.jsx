import { createSlice } from "@reduxjs/toolkit";

const bookSlice=createSlice({
    "name":"book",
    initialState:{
books:[],
bookList:[],
isEdit:false,
item:null,
    },
    reducers:{
getAllBooks(state,action){
    state.books=action.payload;
},
handleAddItem(state,action){
state.bookList=action.payload;
},
handleEdit(state,action){
const {val,item}=action.payload;
state.isEdit=val;
state.item=state.books.find((itm)=>itm.id===item.id);

}
    }
});

export const {getAllBooks,handleAddItem,handleEdit}=bookSlice.actions;
export default bookSlice.reducer;
