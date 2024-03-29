import { defaultFont } from '../material-kit-react.jsx';

const headerLinksStyle = (theme) => ({
	list: {
		...defaultFont,
		fontSize: '14px',
		margin: 0,
		paddingLeft: '0',
		listStyle: 'none',
		paddingTop: '0',
		paddingBottom: '0',
		color: 'inherit',
		direction: 'row'
	},
	listItem: {
		float: 'left',
		color: 'inherit',
		position: 'relative',
		display: 'block',
		width: 'auto',
		margin: '0',
		padding: '0',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			'&:after': {
				width: 'calc(100% - 30px)',
				content: '""',
				display: 'block',
				height: '1px',
				marginLeft: '15px',
				backgroundColor: '#e5e5e5'
			}
		}
	},
	listItemText: {
		padding: '0 !important'
	},
	navLink: {
		color: 'inherit',
		position: 'relative',
		padding: '0.9375rem',
		fontWeight: '400',
		fontSize: '12px',
		textTransform: 'uppercase',
		borderRadius: '3px',
		lineHeight: '20px',
		textDecoration: 'none',
		margin: '0px',
		display: 'inline-flex',
		'&:hover,&:focus': {
			color: 'inherit',
			background: 'rgba(200, 200, 200, 0.2)'
		},
		[theme.breakpoints.down('sm')]: {
			width: 'calc(100% - 30px)',
			marginLeft: '15px',
			marginBottom: '8px',
			marginTop: '8px',
			textAlign: 'left',
			'& > span:first-child': {
				justifyContent: 'flex-start'
			}
		}
	},
	notificationNavLink: {
		color: 'inherit',
		padding: '0.9375rem',
		fontWeight: '400',
		fontSize: '12px',
		textTransform: 'uppercase',
		lineHeight: '20px',
		textDecoration: 'none',
		margin: '0px',
		display: 'inline-flex',
		top: '4px'
	},
	registerNavLink: {
		top: '3px',
		position: 'relative',
		fontWeight: '400',
		fontSize: '12px',
		textTransform: 'uppercase',
		lineHeight: '20px',
		textDecoration: 'none',
		margin: '0px',
		display: 'inline-flex'
	},
	navLinkActive: {
		color: 'inherit',
		backgroundColor: 'rgba(255, 255, 255, 0.1)'
	}
});

export default headerLinksStyle;
