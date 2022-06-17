import { QueryClient, QueryClientProvider } from "react-query";
import SignupForm from "./pages/signupForm";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SignupForm />
    </QueryClientProvider>
  );
}

export default App;
