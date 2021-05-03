import {createGlobalStyle} from 'styled-components';

import {image} from './app-background.jpg'

export const GlobalStyle=createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding:20px 40px;
		/*background: linear-gradient(122deg, rgba(218,224,227,1) 2%, rgba(193,202,28,1) 99%);*/
		
		/*background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);*/


		@media screen and (max-width: 800px) {
			padding:10px;
		}

	}

	a {
		text-decoration: none;
		color:black;
	}

	*{
		box-sizing: border-box;
	}
`;