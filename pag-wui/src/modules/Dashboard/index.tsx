import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducer'
import { imageUploadRequest } from './actions';
import { dashboardSelector, IStateDashboard } from './reducers';
import { Flex, Box } from 'rebass';
import Loader from '../../components/presentationals/Loader';
import UploadForm from '../../components/presentationals/UploadForm';
import DisplayImage from '../../components/presentationals/DisplayImage';

interface IDashboardState {
	imageToUpload: File | null;
}

interface IDashboardProps {
	dashboard: IStateDashboard;
	imageUploadRequest: typeof imageUploadRequest;
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
						this.props.imageUploadRequest(imageToUpload || {});
					}}
					onClick={() => {}}
				/>
				<Flex
					justifyContent='center'
					alignItems='center'
					sx={{
						maxWidth: 512,
						mx: 'auto'
					}}
					height={512}
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
	imageUploadRequest: imageUploadRequest
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)
