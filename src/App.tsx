import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NoFound } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "./views";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<h1>Detalles</h1>} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
