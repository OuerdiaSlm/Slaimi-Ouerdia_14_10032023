import { createSlice } from "@reduxjs/toolkit";

export const userDatatSlice = createSlice({
  user : [],
  name : "user",
 
  initialState : {
    user : [],
  },

  reducers : {
    setUsersData: ( state, action) => {
      state.users = action.payload
    },
  }
})

export const {setUsersData} = userDatatSlice.actions
export default userDatatSlice.reducer;
