
export const NavLink = ({ NavigateTo, className }) => {
    return (
        <li>
            <a href={`#${NavigateTo}`} className={className}> {NavigateTo} </a>
        </li>
    );
}

