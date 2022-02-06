export interface geoData {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

export interface displayGeoData {
  "ip address": string;
  location: string;
  timezone: string;
  isp: string;
}

export interface PageState {
  isSearching: boolean;
  searchError: boolean;
  searchResult: geoData;
  displayResult: displayGeoData;
  lat: number;
  lng: number;
}
