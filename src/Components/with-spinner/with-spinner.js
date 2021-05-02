import React from 'react';

import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles.jsx'


//Now We will declare our HOC WHICH takes some component(WrappedComponent in this case)

//every other property that our regular component that is being wrapped we'll expect
const WithSpinner=WrappedComponent=> ({ isLoading, ...otherProps})=> {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer/>
		</SpinnerOverlay>
		) : (
		<WrappedComponent {...otherProps}/>
		)
}

export default WithSpinner;
