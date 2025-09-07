import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.loading = false;
  state.isFetched = true;
  if (state.page === 1) {
    state.campers = action.payload.items;
    state.total = action.payload.total;
  } else {
    state.campers.push(...action.payload.items);
  }
};

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    loading: false,
    error: null,
    page: 1,
    perPage: 4,
    total: 0,
    isFetched: false,
    selectedCamperById: null,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
      state.isFetched = false;
    },
    resetCampers(state) {
      state.campers = [];
      state.page = 1;
      state.error = null;
      state.isFetched = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, handleFulfilled)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamperById = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { setPage, resetCampers } = camperSlice.actions;
export const campersReducer = camperSlice.reducer;
