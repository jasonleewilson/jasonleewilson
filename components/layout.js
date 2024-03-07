import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Navbar /> {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
