import React from "react";
import img1 from "./../../images/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import GoUp from "./HomePage/GoUp";
import UpperNav from "./UpperNav";

function Nav() {
  
  return (
    <header>
      <UpperNav />
      <nav className="navbar" id="navbar">
        <GoUp />
        <menu className="sous-nav">
          <div className="left-content">
            <img width="40" height="40" alt="search" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuklEQVR4nO2Zy05TURSGNwNx6oTWcBmgj+AAxMsrmCiYQk2I+gAmqLEhAZ0BL2DiSB2YkMaBWsJYixNvb+DEqTrCiEKrn1l0nbg9aaAb1ml76vmTk5708v/rb/dae+1V5zJk6D4Ax4FrwGPgA/AV2NHrC/BeX7sK5F23ATgPVIAarUPe+wI41w0GTgLrXnB14BUwB4wBOeCIXnI/DtwEqvreCGvAiU6ZKALfNJDvwBIwEPB5MbYMbCnHJjCdbNQxAIvet7kKDLkDAhgGyh7fwkG5ggDcU8Hfet9nxHsD+NUWMzSWEyo4mQD/lGemYM3vJ3aUE3cSEWnolLycGU1CIKpOq+bk/+r0eTlTSWKfQCvMiCl5c70hrYSCs5bEstkJlsxI99eU0ix4btl21HQDa3mfMNCVfaau7U3OgvC6fjMvTSIM095Q7VkLMmnyBHMm0YVp31LthxZk0sUKxkyiC9OeUO23FmTSitPO/PC086r92YJsW8n6TaIL0z6q2j97xchmryytj5bJPm4SXZj2GdXe6JXy+8CCTIYJgqpJdGHar1X7otU6jVqUw7cK4S1KDThmRSrTDsGyCWFrmiuqWbYkPa2kPzrQxp+yJo9a+bLVOX2Pg9VT1XqWhMCoHj8FJXOBvzrzqiGTycGkRKZVRAYEUwnwX/aGDxes+eNiC56ZksUy0+U075mQx6JNxK2ZiXJm+BBcI15O+JDSO2MbefMACl7ObOkZOxe4T6xoJdxtDGPz4MhM8mNULQCVmHBVW4sJ3Uz79crrc7f1CFuPjV0H5RfomBmBjGxk2hH4t4IcD57Em9E9zBRcu6DLZRZ4BLzTErqtm9sn4A1wX5flwD7VsbNmjOfAtSZmrrgeMlN0aQM9ZmbyfzAz41JqZiczk5ICsOjSCOCSt8zuujSDRs605+/sDBncLv4AqVXBkihc3DUAAAAASUVORK5CYII=" />
            <input type="text" placeholder="Search" className="navbar-search"/>
          </div>
          <ul className="liste-nav">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <Link to="/">
              <img
                className="image-logo"
                src={img1}
                alt="logo"
                width="120px"
                height="120px"
              />
            </Link>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
          </ul>
          <div className="right-content">
            <img className="nav-menu" width="40px" height="40px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVR4nO3WyQnAMAwFUZcXp/+zDMF9TDrQJcYLmdfBRwimFEmSBgFuoLG/BtRsyMM5+i+GVCDYXwDX51+SJEmaCDN+iZ5dxIyfLMx4SZJ0Gsz4JXp2ETN+sjDjJUlloBfbFyzbu4GNjwAAAABJRU5ErkJggg==" />
            <div className="menu-dropdown">
              <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        </menu>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Nav;
