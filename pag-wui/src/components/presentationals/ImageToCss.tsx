import React from 'react';
import { Flex, Box } from 'rebass';
import { path, getPixel, IBitmap, WIDTH } from '../../utils/imageProcessing';
import shortid from 'shortid';

export interface IPixelatedImage {
	pixelatedImageUrl: string;
	bitmap: IBitmap;
}

interface IImageToCssProps {
	pixelatedImageData: IPixelatedImage;
}

class ImageToCss extends React.Component<IImageToCssProps> {
	pixels: Array<React.ReactNode>;

	constructor(props: IImageToCssProps) {
		super(props);
		console.log(props);

		const { bitmap } = props.pixelatedImageData;
		this.pixels = [];

		for (let i = 0; i < 64; i++) {
			const row: Array<React.ReactNode> = [];
			for (let j = 0; j < 64; j++) {
				const pixel = getPixel(bitmap, j, i);
				row.push(<Box key={shortid.generate()} width={1} height='8px' css={{
					backgroundColor: `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`
				}}></Box>);
			}
			this.pixels.push(<Flex key={shortid.generate()}>{row}</Flex>);
		}
	}

	render() {
		return(
			<Flex
				width={WIDTH}
				flexDirection='column'
			>
				{this.pixels}
			</Flex>
		)
	}
}

export default ImageToCss;
