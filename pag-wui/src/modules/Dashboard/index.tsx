import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducer'
import {
	imageUploadRequest,
	// imageUploadSuccess,
	// imageUploadError
} from './actions';
import { dashboardSelector, IStateDashboard } from './reducers';
import { Box } from 'rebass';
import UploadForm from '../../components/presentationals/UploadForm';

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
		return (
			<Box>
				<UploadForm
					onChange={(event) => {console.log(`changed`); console.log(event.target.files); this.setState({imageToUpload: event.target.files[0]})}}
					onClick={() => {console.log(`clicked pixelate`); this.props.imageUploadRequest(this.state.imageToUpload || {})}}
				/>
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
