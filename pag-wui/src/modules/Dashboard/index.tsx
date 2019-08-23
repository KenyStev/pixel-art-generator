import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducer'
import { imageUploadRequest, imageUploadSuccess, imageUploadError } from './actions';
import { dashboardSelector, IStateDashboard } from './reducers';

interface IDashboardProps {
	dashboard: IStateDashboard;
	imageUploadRequest: typeof imageUploadRequest;
}

class Dashboard extends React.Component<IDashboardProps> {
	render() {
		return (
			<div>
				Dashboard
			</div>
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
