import * as React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import "./App.css";
import { theme } from "./utils/theme";
import { Item } from "./components/Item/Item";
import { Typography } from "@mui/material";
import { Layout } from "./utils/Layout";
//import { Layout } from "./utils/Layout";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Item />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
