import React from 'react';
import './Homepage.scss';
import Directory from '../../Components/Directory/Directory.js'

const Homepage=()=> {
	return (
		<div className='homepage' >
			<div className='homepage-components'>
				<Directory/>
			</div>
		</div>
		
		)
}

export default Homepage;