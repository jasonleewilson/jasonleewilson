import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar /> <div> { children } </div>
            {/* <div><Footer /></div> */}
        </>
    );
};

export default Layout;