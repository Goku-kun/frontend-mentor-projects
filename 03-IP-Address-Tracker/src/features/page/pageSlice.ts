import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";

const trackIp = createAsyncThunk<
  Promise<{ value: object }>,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  "page/trackingIp",
  async (
    requestAddress,
    thunkAPI,
  ): Promise<{
    value: object;
  }> => {
    // eslint-disable-next-line no-console
    console.log(requestAddress, thunkAPI);
    return new Promise((res) => {
      res({ value: {} });
    });
  },
);

interface PageState {
  isSearching: boolean;
  searchError: boolean;
  searchResult: object;
}

const initialState: PageState = {
  searchResult: {},
  isSearching: false,
  searchError: false,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(trackIp.pending, (state: PageState) => {
      state.isSearching = true;
    });
    builder.addCase(trackIp.fulfilled, (state: PageState, action) => {
      state.isSearching = false;
      state.searchResult = action.payload;
    });
    builder.addCase(trackIp.rejected, (state) => {
      state.isSearching = false;
      state.searchError = true;
    });
  },
});

export default pageSlice.reducer;
