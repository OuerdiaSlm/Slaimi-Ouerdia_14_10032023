import { createSlice } from "@reduxjs/toolkit";

export const userDatatSlice = createSlice({
  name : "users",
  initialState : {
    employees: JSON.parse(localStorage.getItem("users")),
  },

  reducers : {
    setUsersData: ( state, action) => {
      state.employees= action.payload
    },

  }
})

export const {setUsersData} = userDatatSlice.actions
export default userDatatSlice.reducer;
