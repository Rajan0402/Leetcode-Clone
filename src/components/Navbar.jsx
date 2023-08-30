import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="nav">
      {/* <Link to="/">
        Site Name
      </Link> */}
      <ul className="problems__navbar">
        <CustomLink to="/description">Description</CustomLink>
        <CustomLink to="/solution">Solution</CustomLink>
        <CustomLink to="/submission">Submission</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}