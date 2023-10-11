import { createSlice } from "@reduxjs/toolkit";

const bookSlice=createSlice({
    "name":"book",
    initialState:{
books:[],
bookList:[],
isEdit:false,
item:{},
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
state.item=state.bookList.find((itm)=>itm._id===item._id);

}
    }
});

export const {getAllBooks,handleAddItem,handleEdit}=bookSlice.actions;
export default bookSlice.reducer;
