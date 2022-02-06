import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  PageState,
  geoData,
  displayGeoData,
} from "../../@types/features/pageSlice.d";
import { AppDispatch, RootState } from "../../app/store";
import {
  ValidateIPaddress,
  formatGeoData,
  isPrivateIpAddress,
} from "../../utils/utilityFunctions";

const defaultData: geoData = {
  ip: "",
  location: {
    country: "",
    region: "",
    city: "",
    lat: 0,
    lng: 0,
    postalCode: "",
    timezone: "",
    geonameId: 0,
  },
  as: {
    asn: 0,
    name: "",
    route: "",
    domain: "",
    type: "",
  },
  isp: "",
};

const defaultDisplayData: displayGeoData = {
  "ip address": "",
  location: "",
  timezone: "",
  isp: "",
};

export const trackIp = createAsyncThunk<
  Promise<geoData>,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>("page/trackingIp", async (requestAddress): Promise<geoData> => {
  const isIpAddress = ValidateIPaddress(requestAddress);
  let data: geoData;

  if (isIpAddress === true) {
    const isPrivate = isPrivateIpAddress(requestAddress);
    if (isPrivate) return defaultData;
    try {
      const response: Response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9mQdamGGHBQX29LAxfG6rTm4RYIyt&ipAddress=${requestAddress}`,
      );
      data = await response.json();

      return data;
    } catch (e) {
      return defaultData;
    }
  } else {
    try {
      const response: Response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9mQdamGGHBQX29LAxfG6rTm4RYIyt&domain=${requestAddress}`,
      );
      data = await response.json();
      return data;
    } catch (e) {
      return defaultData;
    }
  }
});

const initialState: PageState = {
  searchResult: defaultData,
  displayResult: defaultDisplayData,
  isSearching: false,
  searchError: false,
  lat: 0,
  lng: 0,
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
      const resultData: geoData = action.payload as unknown as geoData;
      state.isSearching = false;
      state.searchResult = resultData;
      state.displayResult = formatGeoData(resultData);
      state.lat = resultData.location.lat;
      state.lng = resultData.location.lng;
    });
    builder.addCase(trackIp.rejected, (state) => {
      state.isSearching = false;
      state.searchError = true;
    });
  },
});

export const selectDisplayResult = (state: RootState) =>
  state.page.displayResult;

export const selectLat = (state: RootState) => state.page.lat;
export const selectLng = (state: RootState) => state.page.lng;
export default pageSlice.reducer;
