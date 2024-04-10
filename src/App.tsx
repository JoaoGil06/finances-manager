import { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { GET_PAYMENTS } from "./graphql/queries/payments";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Dashboard from "./pages/Dashboard/index";
import Expenses from "./pages/Expenses/index";
import Categories from "./pages/Categories/index";
import NotFound from "./pages/NotFound/index";

function App() {
  const [count, setCount] = useState(0);

  const { data: payments, loading } = useQuery(GET_PAYMENTS);

  useEffect(() => {
    console.log("[Payments]: ", payments);
  }, [payments]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
