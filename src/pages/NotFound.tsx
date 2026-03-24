import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">This page is not created yet</h1>
          <p className="text-primary hover:text-primary/90">
            For extra page contact : <a className="underline" href="https://www.instagram.com/umang_prajapati026">@Umang prajapati</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
