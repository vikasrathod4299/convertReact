

// eslint-disable-next-line react/prop-types
const NavLink = ({href, body}) => {
  return (
    <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href={href}>{body}</a></li>
  )
}

export default NavLink