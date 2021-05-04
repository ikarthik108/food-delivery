import React from 'react';
import './SearchBox.css'

const SearchBox = ({title,searchChange}) => {
	// const titleWords=title.split(" ")
	const newtitle=title
	return (
		<div className='search-box'>
			<input 
			className=' tl pa3 ba b--green bg-lightest-blue' 
			type='search'
			title={title} 
			placeholder={`Search the ${newtitle}...`}
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;