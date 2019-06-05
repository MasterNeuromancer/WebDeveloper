import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import BC1 from './images/OnlineBC1.PNG';
import BC2 from './images/OnlineBC2.PNG';
import BC3 from './images/OnlineBC3.PNG';
import BC4 from './images/OnlineBC4.PNG';
import BC5 from './images/OnlineBC5.PNG';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
	{
		label: 'Online Bookcase',
		imgPath: BC4
	},
	{
		label: 'Online Bookcase',
		imgPath: BC5
	},
	{
		label: 'Online Bookcase',
		imgPath: BC1
	},
	{
		label: 'Online Bookcase',
		imgPath: BC2
	},
	{
		label: 'Online Bookcase',
		imgPath: BC3
	}
];

const styles = (theme) => ({
	root: {
		maxWidth: 500,
		flexGrow: 1
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing.unit * 4,
		backgroundColor: theme.palette.background.default
	},
	img: {
		height: 325,
		display: 'block',
		maxWidth: 500,
		overflow: 'hidden',
		width: '100%'
	}
});

class SwipeableTextMobileStepper extends React.Component {
	state = {
		activeStep: 0
	};

	handleNext = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep + 1
		}));
	};

	handleBack = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep - 1
		}));
	};

	handleStepChange = (activeStep) => {
		this.setState({ activeStep });
	};

	render() {
		const { classes, theme } = this.props;
		const { activeStep } = this.state;
		const maxSteps = tutorialSteps.length;

		return (
			<div className={classes.root}>
				<Paper square elevation={0} className={classes.header}>
					<Typography>{tutorialSteps[activeStep].label}</Typography>
				</Paper>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeStep}
					onChangeIndex={this.handleStepChange}
					enableMouseEvents
				>
					{tutorialSteps.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<img className={classes.img} src={step.imgPath} alt={step.label} />
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					className={classes.mobileStepper}
					nextButton={
						<Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
							Next
							{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
						</Button>
					}
					backButton={
						<Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
							{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
							Back
						</Button>
					}
				/>
			</div>
		);
	}
}

SwipeableTextMobileStepper.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);