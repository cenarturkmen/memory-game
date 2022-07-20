import * as React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import "./App.css";
import { theme } from "./utils/theme";
import { Layout } from "./utils/Layout";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Table />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
