import { HOSTNAME } from './api';

export const WIDTH = 512;
export const HEIGHT = 512;

export interface IBitmap {
	width: number;
	height: number;
	data: Array<number>;
}

export const path = (imagePath: string) => `${HOSTNAME}${imagePath}`;

export const getPixel = (bitmap: IBitmap, x: number, y: number) => {
	const position = (x + bitmap.width * y ) * 4;
	return {
		r: bitmap.data[position],
		g: bitmap.data[position + 1],
		b: bitmap.data[position + 2],
	};
}
