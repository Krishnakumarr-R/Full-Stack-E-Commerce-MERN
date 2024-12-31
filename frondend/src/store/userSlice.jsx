import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user : null
}
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserDetails : (state,action)=>{
        if (action.payload && action.payload.data) {
          state.user = action.payload.data;
        } else {
          state.user = null; // Reset to null if payload is invalid
        }
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setUserDetails } = userSlice.actions
  
  export default userSlice.reducer