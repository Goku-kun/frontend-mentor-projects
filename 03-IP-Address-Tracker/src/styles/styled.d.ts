import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    primary: object;
    fonts: {
      primary: string;
    };
    fontSize: {
      resultHeader: string;
      textInput: string;
      result: string;
    };
    fontWeight: {
      body: number;
      heading: number;
      bold: number;
    };
    color: {
      text: string;
      primary: string;
      secondary: string;
      heading: string;
      bar: string;
    };
  }
}
