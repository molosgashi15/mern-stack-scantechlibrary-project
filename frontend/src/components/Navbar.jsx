import { Link } from "react-router-dom";
import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <b>Scantech Library</b> &nbsp;|&nbsp;
      <Link to="/dashboard">Dashboard</Link> &nbsp;|&nbsp;
      <Link to="/students">Students</Link> &nbsp;|&nbsp;
      <Link to="/books">Books</Link> &nbsp;|&nbsp;
      <Link to="/loans">Loans</Link>
    </nav>
  );
}