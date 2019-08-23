import { makeRequest } from './network';
import { stringify } from 'querystring';
import { string } from 'prop-types';

export const HOSTNAME = 'localhost:5000/';

export const postImage =
	(body: FormData) => makeRequest(`${HOSTNAME}/images`, 'POST', body);

export interface IGetPixelatedImageQuery {
	imageName: string;

	[key: string]: any;
}

export const getPixelatedImage = (
	params: IGetPixelatedImageQuery
) => makeRequest(`${HOSTNAME}/images/pixelated?${stringify(params)}`, 'GET', '');
