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
      console.log(state.users)
    },
  }
})

export const {setUsersData} = userDatatSlice.actions
export default userDatatSlice.reducer;
