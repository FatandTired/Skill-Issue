import { Toaster } from "@/components/ui/sonner";

import NavBar from "@/components/navBar.tsx";
import Home from "@/pages/home.tsx";
import Footer from "@/components/footer.tsx";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster />
    </>
  );
}

export default App;
