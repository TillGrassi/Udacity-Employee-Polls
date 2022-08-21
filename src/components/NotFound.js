import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function NotFound() {
  return (
    <div>
      <NavBar />
      <h1>404 - Not Found</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default NotFound;
