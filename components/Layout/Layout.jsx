import Cursor from "../Cursor/Cursor";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Cursor/>
      <Footer />
    </>
  );
};
export default Layout;
