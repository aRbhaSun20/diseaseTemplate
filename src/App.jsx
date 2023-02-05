import React from "react";

import "./index.css";
import AddDisease from "./pages/AddDisease";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatGPT from "./pages/chatGPT/ChatGPT";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddDisease />,
  },
  {
    path: "/chatGPT",
    element: <ChatGPT />,
  },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <div className="container">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </div>
);

export default App;
