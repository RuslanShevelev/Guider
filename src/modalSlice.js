import { createSlice } from "@reduxjs/toolkit";
import { infoApi } from "./appService";

const initialState = {
  showModal: false,
  loading: false,
  modalContent: {},
};

export const modalSlice = createSlice({
  name: "modalsReducer",
  initialState,
  reducers: {
    closeModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(infoApi.endpoints.getInfo.matchPending, (state) => {
      state.loading = true;
    });
    builder.addMatcher(
      infoApi.endpoints.getInfo.matchFulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.showModal = true;
        state.modalContent = payload;
      }
    );
  },
});

export const { closeModal } = modalSlice.actions;

export default modalSlice.reducer;
