import { forIn } from 'lodash';

type TAvailableMethods = 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT' | 'OPTIONS';
type TEndpoint = string;

interface IHeadersObject {
	'Content-Type': string;
}

interface IMakeRequestObjectParams {
	method: TAvailableMethods;
	endpoint: TEndpoint;
	headers: IHeadersObject;
}

export function makeRequestObject(params: IMakeRequestObjectParams): XMLHttpRequest {
	const requestObject = new XMLHttpRequest();

	requestObject.open(params.method, params.endpoint);

	forIn(params.headers, (value, key) => {
		requestObject.setRequestHeader(key, value);
	});

	return requestObject;
}


// Base fetch function wrapped for redux-saga
export interface IResponse {
	ok: boolean;
	url: string;
	status: number;
	body: any;
	headers: object;
}

export function* makeRequest(
	endpoint: TEndpoint,
	method: TAvailableMethods,
	body: string | Blob | FormData
) {
	const computedBody = method !== 'GET' ? body : undefined;

	let headers: any = {};

	if (typeof body === 'string') {
		headers['Content-Type'] = 'application/json';
	}

	try {
		// The response object
		const rawResponse = yield fetch(endpoint, {
			method: method,
			body: computedBody,
			headers: headers,
			credentials: 'include',
			mode: 'cors',
			redirect: 'follow'
		});

		const bodyText = yield rawResponse.text();

		const successResponse: IResponse = {
			ok: rawResponse.ok,
			url: rawResponse.url,
			status: rawResponse.status,
			headers: rawResponse.headers,
			body: rawResponse.headers.get('Content-Type').match(/application\/json/) ? JSON.parse(bodyText) : {}
		};

		return successResponse;
	}
	catch(e) {
		const errorResponse: IResponse = {
			ok: false,
			url: '',
			status: 0,
			body: {},
			headers: {}
		}

		return errorResponse;
	}
}
