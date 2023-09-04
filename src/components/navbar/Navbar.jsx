import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import './navbar.css'

function Navbar() {
  return (
    <nav className="nav_main">
      <ul className="nav_main_ul">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/problemsAll">Problems</CustomLink>
        <CustomLink to="/contest">Contest</CustomLink>
        <CustomLink to="/explore">Explore</CustomLink>
      </ul>
      <ul className="nav_main_ul">
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Signup</CustomLink>
      </ul>
    </nav>
  )
}

// eslint-disable-next-line react/prop-types
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

export default Navbar;