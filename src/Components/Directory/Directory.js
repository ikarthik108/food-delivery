import React from 'react';
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem.js'
import {selectDirectorySections} from '../../redux/directory/directory.selectors.js';
import {connect} from 'react-redux';

const Directory=({sections})=>{
		return (
			<div className='directory-menu'>
				{sections.map(section=> (
					<MenuItem key={section.id} title={section.title} 
					imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>
					)
				)
				}
			</div>
			)

}


const mapStateToProps=state=> ({
	sections:selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);

