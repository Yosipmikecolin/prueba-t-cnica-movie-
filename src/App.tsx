import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovieGrid } from "./components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <MovieGrid />
      </main>
    </QueryClientProvider>
  );
}

export default App;
