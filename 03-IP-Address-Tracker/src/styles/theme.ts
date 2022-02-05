interface Theme {
  primary: object;
  fonts: {
    primary: string;
  };
  fontWeights: {
    body: number;
    heading: number;
    bold: number;
  };
  color: {
    text: string;
    primary: string;
    secondary: string;
    heading: string;
  };
}

const theme: Theme = {
  primary: {},
  fonts: {
    primary: "Rubik, sans-serif",
  },
  fontWeights: { body: 400, heading: 700, bold: 700 },
  color: {
    primary: "hsl(0, 0%, 17%)",
    secondary: "hsl(0, 0%, 59%)",
    text: "black",
    heading: "white",
  },
};
export default theme;
