import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink className="navButtons" to="/">
          Home
        </NavLink>

        <NavLink className="navButtons" to="/illustrations/">
          {' '}
          Illustrations{' '}
        </NavLink>

        <NavLink className="navButtons" to="/sketchbook/">
          {' '}
          Sketchbook{' '}
        </NavLink>

        <NavLink className="navButtons" to="/about/">
          {' '}
          About{' '}
        </NavLink>
      </nav>
    </>
  )
}
