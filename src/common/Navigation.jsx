import "../common/Navigation.css"
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='NavigationBar pt-10 '>
        <div className="conteiner">
            <div className="firstFlex flex justify-around">
                <div className="logo">
                   <NavLink to={'/'}><img src="/Exclusive.png" alt="" /></NavLink> 
                </div>
                <div className="menu">
                    <ul className=" flex gap-12 ">
                        <li><NavLink className={(e) => {return e.isActive ? "red" : ""}} to={'/'}>Home</NavLink></li>
                        <li><NavLink className={(e) => {return e.isActive ? "red" : ""}} to={'/contact'}>Contact</NavLink></li>
                        <li><NavLink className={(e) => {return e.isActive ? "red" : ""}} to={'/about'}>About</NavLink></li>
                        <li><NavLink className={(e) => {return e.isActive ? "red" : ""}} to={'/SignUp'}>SignUp</NavLink></li>
                         
                    </ul>
                </div>
                <div className="search">
                    <input type="Search" />
                    <img src="/search.png" alt="" />
                </div>
                <div className="cart">
                    <img src="/love.png" alt="" />
                    <img src="/gari.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation