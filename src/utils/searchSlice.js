import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
  },
  reducers: {
    setSearchItem: (state, action) => {
      state.items.push(...action.payload);
    },
    removeAll: (state, action) => {
      state.items = [];
    },
  },
});

export const { setSearchItem , removeAll } = searchSlice.actions;

export default searchSlice.reducer;
