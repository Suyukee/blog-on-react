'use client';

import { useState } from 'react';
import Sidebar from './sidebar';

export default function Header() {
	const [isClick, setIsClick] = useState(false);
	const toggleSidebar = () => {
		setIsClick(!isClick);
	};

	return (
		<header className="header">
			<h1 className="header__logo">Blog on React</h1>
			<nav className="header__navbar">
				<div className="navbar__menu">
					<a href="/">Home</a>
					<a href="/new-blog">New Blog</a>
				</div>
				<div className="navbar__menu-btn">
					<button className="menu-btn__button" onClick={toggleSidebar}>
						<svg width="35px" height="35px" viewBox="0 0 24 24">
							<path
								d="M4 6H20M4 12H20M4 18H20"
								stroke="#000000"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</button>
				</div>
				{isClick && <Sidebar toggleSidebar={toggleSidebar} />}
			</nav>
		</header>
	);
}
