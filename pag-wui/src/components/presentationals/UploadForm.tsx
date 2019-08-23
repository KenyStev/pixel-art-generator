import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import styled from 'styled-components';

const PixelateButton = styled(Button)`
	background-color: #2590dc;
	cursor: pointer;

	${props => props.disabled && `
		background-color: #d8ebf9;
		cursor: not-allowed;
	`}
`;

interface IUploadFormProps {
	disabled: boolean;
	onChange: (path: any) => void;
	onClick: (event: any) => void;
}

const UploadForm: React.FC<IUploadFormProps> = ({
	disabled = true,
	onChange,
	onClick
}) => (
	<Box
		as='form'
		onSubmit={e => e.preventDefault()}
		py={3}
	>
		<Flex
			mb={3}
			alignItems='center'
		>
			<Flex
				flex='1 1 auto'
				flexDirection='row'
			>
				<Box
					px={2}
					alignSelf='center'
					css={{
						minWidth: 'fit-content'
					}}
				>
					<Label
						htmlFor='name'>Image to Pixelate</Label>
				</Box>
				<Box
					width={1}
				>
					<Input
						id='image-name'
						name='image'
						type='file'
						placeholder='upload file...'
						css={{
							borderRadius: 5,
							border: '1px solid #2590dc'
						}}
						onChange={onChange}
					/>
				</Box>
			</Flex>
			<Box
				px={2}
			>
				<PixelateButton
					mr={2}
					onClick={onClick}
					disabled={disabled}
				>
					Pixelate
				</PixelateButton>
			</Box>
		</Flex>
	</Box>
);

export default UploadForm;
