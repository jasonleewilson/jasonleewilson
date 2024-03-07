import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Navbar /> <div> {children} </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
