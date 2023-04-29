
import logo from '../images/logo.svg';
import { NavLink } from './NavLink';
import { NavLinksData, NavIconData } from '../data/Data';
import { NavIcons } from './NavIcons';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
                </div>
                <ul className="nav-links" id="nav-links">

                {NavLinksData.map((navLink) => {
                    return <NavLink NavigateTo={navLink.NavigateTo} className="nav-link"/>
                })}

                </ul>

                <ul className="nav-icons">
                {NavIconData.map((navIconData) => {
                    return <NavIcons targetType={navIconData.targetType} travelToWebsite={navIconData.travelToWebsite} icon={navIconData.icon} className="nav-icon"/>;
                })}
                </ul>
            </div>
        </nav>
    );
}

