import { displayGeoData, geoData } from "../@types/features/pageSlice.d";

function ValidateIPaddress(ipaddress: string) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress,
    )
  ) {
    return true;
  }
  return false;
}

function formatGeoData(data: geoData): displayGeoData {
  const geoDataObject: displayGeoData = {
    "ip address": data.ip,
    location: data.location.city
      ? `${data.location.city}, ${data.location.country}`
      : "",
    timezone: data.location.timezone,
    isp: data.isp,
  };

  return geoDataObject;
}

function isPrivateIpAddress(ipAddress: string): boolean {
  if (
    /(^192\.168\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)|(^172\.([1][6-9]|[2][0-9]|[3][0-1])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)|(^10\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)/.test(
      ipAddress,
    )
  ) {
    return true;
  }
  return false;
}

export { ValidateIPaddress, formatGeoData, isPrivateIpAddress };
