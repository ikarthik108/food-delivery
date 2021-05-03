import {createGlobalStyle} from 'styled-components';

import {image} from './app-background.jpg'

export const GlobalStyle=createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding:20px 40px;
		background: linear-gradient(122deg, rgba(218,231,238,1) 0%, rgba(244,229,235,1) 99%);


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