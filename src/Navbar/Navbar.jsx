import React, { Component } from 'react';
import {
	NavLink,
	Link
} from "react-router-dom";

class Navbar extends Component {
	render() {
		const dogLinks = this.props.dogs.map(dog => (
			<li key={dog.name}>
				<NavLink to={`/dog/${dog.name}`} className='nav-link' >
					{dog.name}
				</NavLink>
			</li>
		))

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to='/'>
						DOG SITE
					</Link>
					<div className="collapse navbar-collapse" id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<NavLink to='/' className='nav-link'>
									Home
								</NavLink>
							</li>
							{dogLinks}
						</ul>
					</div>
					{/* <form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						</input>
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form> */}
					<button
						className="navbar-toggler"
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className="navbar-toggler-icon" />
					</button>
				</div>
			</nav>
		);
	}
}

export default Navbar;
