

export const NavIcons = ({ travelToWebsite, targetType, icon, className }) => {
    return (
        <li>
            <a href={travelToWebsite} target={targetType} className={className}><i className={icon}></i></a>
        </li>
    )
}
