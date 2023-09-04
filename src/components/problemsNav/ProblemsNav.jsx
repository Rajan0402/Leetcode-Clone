import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './problemsNav.css'

export default function ProblemsNav() {
  return (
    <nav className="nav">
      <ul className="problems__navbar">
        <CustomLink to="/description">Description</CustomLink>
        <CustomLink to="/solution">Solution</CustomLink>
        <CustomLink to="/submission">Submission</CustomLink>
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