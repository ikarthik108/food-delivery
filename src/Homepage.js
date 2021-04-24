import React from 'react';
import './Homepage.scss'

const Homepage=()=> {
	return (
		<div className='Homepage'>
			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>North Indian</h1>
						<span className='subtitle'>ORDER NOW</span>
					</div>
				</div>

				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Italian</h1>
						<span className='subtitle'>ORDER NOW</span>
					</div>
				</div>

				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Chinese</h1>
						<span className='subtitle'>ORDER NOW</span>
					</div>
				</div>

				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>South Indian</h1>
						<span className='subtitle'>ORDER NOW</span>
					</div>
				</div>

				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Continental</h1>
						<span className='subtitle'>ORDER NOW</span>
					</div>
				</div>

			</div>
		</div>
		)
}

export default Homepage;