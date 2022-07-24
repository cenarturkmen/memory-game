import * as React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import "./App.scss";
import { theme } from "./utils/theme";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
