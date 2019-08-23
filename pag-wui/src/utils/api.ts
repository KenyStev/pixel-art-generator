import { makeRequest } from './network';
import { stringify } from 'querystring';
import { string } from 'prop-types';

export const HOSTNAME = '/';

export const postImage =
	(body: FormData) => makeRequest(`${HOSTNAME}/images`, 'POST', body);

export const getPixelatedImage =
	() => makeRequest(`${HOSTNAME}/images/pixelated`, 'GET');
