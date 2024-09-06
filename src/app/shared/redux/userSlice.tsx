import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface userState {
  userToken: string ;
  name: string;
  email: string;
  isLogin: boolean;
}

// Define the initial state using that type
const initialState: userState = {
  userToken: '',
  name: ' ',
  email: ' ',
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUserData: (state, action: PayloadAction<any>) => {
      state.userToken = action.payload?.token;
      state.name = action.payload?.user?.name;
      state.email = action.payload?.user?.email;
      state.isLogin = true;
    },
    SignOut: (state) => {
      state.userToken = " ";
      state.name = " ";
      state.email = " ";
      state.isLogin = false;
    },
  },
});

export const { addUserData , SignOut} = userSlice.actions;
export const Token = (state: any) => state.user.userToken; 
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: any) => state.user.value;

export default userSlice.reducer;
