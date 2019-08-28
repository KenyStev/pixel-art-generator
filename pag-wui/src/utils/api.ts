import { makeRequest } from './network';
import { stringify } from 'querystring';

// export const HOSTNAME = `http://${process.env.API_HOST || 'ec2-54-92-213-241.compute-1.amazonaws.com'}:5000`;
export const HOSTNAME = ``;

export const postImage =
	(body: FormData) => makeRequest(`${HOSTNAME}/images`, 'POST', body);

export interface IGetPixelatedImageQuery {
	imageName: string;

	[key: string]: any;
}

export const getPixelatedImage = (
	params: IGetPixelatedImageQuery
) => makeRequest(`${HOSTNAME}/images/pixelated?${stringify(params)}`, 'GET', '');

export interface IGetTestUploadImageQuery {
	testImage: string;

	[key: string]: any;
}

export const getTestImage = (
	params: IGetTestUploadImageQuery
) => makeRequest(`${HOSTNAME}/images/test?${stringify(params)}`, 'GET', '');
