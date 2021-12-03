import {  Outlet, Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        {/* <Link to="/GetNood">GetNood</Link> | {" "}  */}
        <Link to="/Contact">Discord</Link>
        
      </nav>
      <Outlet />
    </div>
  );
}