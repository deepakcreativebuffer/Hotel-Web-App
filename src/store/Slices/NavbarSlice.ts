import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface NavState {
	show:boolean;
}

const initialState: NavState = {
	show:false,
};

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		navAction: (state, action: PayloadAction<NavState>) => {
			state.show = action.payload.show;
		},
	
	},
	extraReducers: (builder) => {},
});

export const { navAction } = navSlice.actions;

export default navSlice.reducer;
