import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducer'
import { imageTestUploadRequest, imageUploadRequest, pixelateImageRequest } from './actions';
import { dashboardSelector, IStateDashboard } from './reducers';
import { Flex, Box } from 'rebass';
import Loader from '../../components/presentationals/Loader';
import UploadForm from '../../components/presentationals/UploadForm';
import DisplayImage from '../../components/presentationals/DisplayImage';
import { WIDTH, HEIGHT } from '../../utils/imageProcessing';

interface IDashboardState {
	imageToUpload: File | null;
}

interface IDashboardProps {
	dashboard: IStateDashboard;
	imageTestUploadRequest: typeof imageTestUploadRequest;
	imageUploadRequest: typeof imageUploadRequest;
	pixelateImageRequest: typeof pixelateImageRequest;
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
	state = {
		imageToUpload: null
	}

	render() {
		const { fetching, uploadedImageData, pixelatedImageData } = this.props.dashboard;

		return (
			<Box>
				<UploadForm
					disabled={!this.state.imageToUpload}
					onChange={(event) => {
						const imageToUpload = event.target.files[0];

						this.setState({imageToUpload});
						this.props.imageTestUploadRequest(imageToUpload || {});
						{/*this.props.imageUploadRequest(imageToUpload || {});*/}
					}}
					onClick={() => {this.props.pixelateImageRequest(uploadedImageData.filename)}}
				/>
				<Flex
					justifyContent='center'
					alignItems='center'
					sx={{
						maxWidth: WIDTH,
						mx: 'auto'
					}}
					height={HEIGHT}
					css={{
						margin: 'auto',
						border: '1px solid #2590dc'
					}}
				>
					<DisplayImage
						fetching={fetching}
						uploadedImageData={uploadedImageData}
						pixelatedImageData={pixelatedImageData}
						loader={(loading) => (loading && <Loader size={80} />)}
					/>
				</Flex>
			</Box>
		)
	}
}

const mapStateToProps = (state: IState) => ({
	dashboard: dashboardSelector(state)
});

const mapDispatchToProps = {
	imageTestUploadRequest: imageTestUploadRequest,
	imageUploadRequest: imageUploadRequest,
	pixelateImageRequest: pixelateImageRequest
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)
