import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Homepage from "./components/Homepage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
