import React from 'react';
import { Box, Image } from 'rebass';
import { HOSTNAME } from '../../utils/api';

const path = (imagePath: string) => `${HOSTNAME}${imagePath}`;
// const rawPath = (imagename: string) => `${HOSTNAME}/images/raw/${imagename}`;
// const pxPath = (imagename: string) => `${HOSTNAME}/images/pixelated/${imagename}`;

interface IDisplayImageProps {
	fetching: boolean;
	uploadedImageData: any;
	pixelatedImageData: any;
}

const DisplayImage: React.FC<IDisplayImageProps> = ({
	fetching = false,
	uploadedImageData = null,
	pixelatedImageData = null
}) => (
	<Box
		width={512}
		height={512}
		css={{
			position: 'relative'
		}}
	>
		{ !uploadedImageData && !pixelatedImageData && 'no image selected' }
		{ uploadedImageData && !pixelatedImageData && <Image width={1} height={512} src={path(uploadedImageData.imageUrl)} />}
		{ pixelatedImageData && <Image width={1} height={512} src={path(pixelatedImageData.imageUrl)} />}
	</Box>
)

export default DisplayImage;
