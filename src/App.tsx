import { useState, useEffect } from "react";

import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_PAYMENTS } from "./graphql/queries/payments";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [count, setCount] = useState(0);

  const { data: payments, loading } = useQuery(GET_PAYMENTS);

  useEffect(() => {
    console.log("[Payments]: ", payments);
  }, [payments]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
