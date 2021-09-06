import Footer from "./Footer";
import Nabvar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Nabvar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;