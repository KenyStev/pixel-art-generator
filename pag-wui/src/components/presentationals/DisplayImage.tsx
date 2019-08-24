import React from 'react';
import { Box, Image } from 'rebass';
import { HOSTNAME } from '../../utils/api';
import { path, WIDTH, HEIGHT } from '../../utils/imageProcessing';
import styled from 'styled-components';

const LoaderBox = styled(Box)`
	display: flex;
	position: absolute;
	width: ${WIDTH}px;
	height: ${HEIGHT}px;
	background-color: rgba(0, 0, 0, 0.8);

	justify-content: center;
	align-items: center;
`;

interface IDisplayImageProps {
	fetching: boolean;
	uploadedImageData: any;
	pixelatedImageData: any;

	loader: (loading: boolean) => React.ReactNode;
}

const DisplayImage: React.FC<IDisplayImageProps> = ({
	fetching = false,
	uploadedImageData = null,
	pixelatedImageData = null,
	loader = (loading) => 'loading...'
}) => (
	<Box
		width={WIDTH}
		height={HEIGHT}
		css={{
			position: 'relative'
		}}
	>
		{
			fetching &&
			<LoaderBox>
				{ loader(fetching) }
			</LoaderBox>
		}
		{ !uploadedImageData && !pixelatedImageData && 'no image selected' }
		{ uploadedImageData && !pixelatedImageData && <Image width={1} height={HEIGHT} src={path(uploadedImageData.imageUrl)} />}
		{ pixelatedImageData && <Image width={1} height={HEIGHT} src={path(pixelatedImageData.pixelatedImageUrl)} />}
	</Box>
)

export default DisplayImage;
