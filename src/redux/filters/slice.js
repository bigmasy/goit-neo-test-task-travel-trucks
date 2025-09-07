import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    AC: null,
    automatic: null,
    kitchen: null,
    TV: null,
    bathroom: null,
  },
  reducers: {
    toggleFilter(state, action) {
      const key = action.payload;
      if (key in state && typeof state[key] !== "string") {
        state[key] = state[key] === true ? null : true;
      }
    },
    setFilterValue(state, action) {
      const { key, value } = action.payload;
      if (key in state && typeof state[key] === "string") {
        state[key] = value;
      }
    },
  },
});

export const { toggleFilter, setFilterValue } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
