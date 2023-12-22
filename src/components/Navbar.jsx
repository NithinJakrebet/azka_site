/* 
- Home Page - Upcoming events, pics Slideshow type 
- Executive committee (intro/bio)
- Photo gallery (photos by event)
- Newsletter (yearly)
- Contact, Zelle
*/

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import om from "../photos/om.jpeg";
import "../styles.css"

export default function Navbar() {
	return <nav className="nav">
		<Link to="/" className="site-title">Arizona Konkani Association</Link>
		<ul>
			<CustomLink to="/about">About</CustomLink>
			<CustomLink to="/newsletter">Newsletter</CustomLink>
			<CustomLink to="/contact">Contact</CustomLink>
		</ul>
	</nav>
}

function CustomLink({ to, children, ...props}) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}
