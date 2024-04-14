import AppBar from "../AppBar/AppBar";
// import Loader from "../Loader/Loader";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
      
    </>
  );
};


export default Layout;