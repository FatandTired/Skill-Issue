import { Outlet } from "react-router-dom";
import NavBar from "@/components/navBar.tsx";
import Footer from "@/components/footer.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";

function Layout() {
  return (
    <div className={"min-h-screen"}>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={"sticky top-[100vh]"}>
        <Footer />
      </footer>
      <Toaster />
    </div>
  );
}

export default Layout;
