import { FooterLinksData, NavIconData } from "../data/Data";
import { NavLink } from "./NavLink";
import { NavIcons } from "./NavIcons";


export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {FooterLinksData.map((footerLinkData) => {
                    return <NavLink NavigateTo={footerLinkData.NavigateTo} className="footer-link"/>
                })}
            </ul>
            <ul className="footer-icons">
                {NavIconData.map((navIconData) => {
                    return <NavIcons travelToWebsite={navIconData.travelToWebsite} targetType={navIconData.targetType} icon={navIconData.icon} className="footer-icon"/>
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
}

