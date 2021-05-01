import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../helpers/helpers'

const Sidebar = ({ onChange }) => {
    const [active, setActive] = useState('');

    const handleClick = (name) => {
        onChange(name)
        setActive(name)
    };

    return (
        <nav className="nav-categories">
            <h2 onClick={() => handleClick("")}><Link to="/">Categories</Link></h2>
            <ul className="nav-menu" aria-label="sidebar">
                {
                    CATEGORIES.map(name => {
                        return (
                            <li 
                                key={name} 
                                className={`${name === active ? "active" : ""}`} 
                                onClick={() => handleClick(name)}
                            >
                                <span>{name}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    )
};

export default Sidebar;