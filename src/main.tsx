import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo";

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser.ts");
  await worker.start();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
