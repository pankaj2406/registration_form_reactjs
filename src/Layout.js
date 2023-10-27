import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const myStyle = {
    margine: "10px",
    padding: "10px",
    backgroundColor: "dodgerBlue"
  };
  const style = {
    margine: "10px",
    padding: "10px"
  }
  return (
    <>
      <nav style={myStyle}>

        <Link to="/home" style={style}>Home</Link>

        <Link to="/Login" style={style}>Login</Link>

        <Link to="/Myform" style={style}>Registeration</Link>

        {/* <Link to="/List" style={style}>List</Link> */}

      </nav>

      <Outlet />

    </>
  )
};

export default Layout;
