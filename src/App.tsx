import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovieGrid, MovieSlider } from "./components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-gray-50">
        <MovieSlider />
        <MovieGrid />
      </main>
    </QueryClientProvider>
  );
}

export default App;
