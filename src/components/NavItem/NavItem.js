import './NavItem.css'

const NavItem = (props) => {
  return (
    <li className='nav-item pl-3'>
        {props.children}
    </li>
  )
}

const NavItemDropDown = (props) => {
  return (
    <li className='nav-item dropdown px-3'>
        {props.children}
    </li>
  )
}

export default NavItem
export {NavItemDropDown}