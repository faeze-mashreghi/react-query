import { QueryClient, QueryClientProvider } from "react-query";
import SignupForm from "./page/signupForm";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SignupForm />
    </QueryClientProvider>
  );
}

export default App;
