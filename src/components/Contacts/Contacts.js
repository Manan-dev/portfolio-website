import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { contactsData } from '../../data/contactsData';
import { socialsData } from '../../data/socialsData';
import './Contacts.css';

function Contacts() {
	const [open, setOpen] = useState(false);

	const { theme } = useContext(ThemeContext);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const useStyles = makeStyles(t => ({
		input: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			transition: 'border 0.2s ease-in-out',
			'&:focus': {
				border: `4px solid ${theme.primary600}`,
			},
		},
		message: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			transition: 'border 0.2s ease-in-out',
			'&:focus': {
				border: `4px solid ${theme.primary600}`,
			},
		},
		label: {
			backgroundColor: `${theme.secondary}`,
			color: `${theme.primary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 600,
			fontSize: '0.9rem',
			padding: '0 5px',
			transform: 'translate(25px,50%)',
			display: 'inline-flex',
		},
		socialIcon: {
			width: '45px',
			height: '45px',
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '21px',
			backgroundColor: theme.primary,
			color: theme.secondary,
			transition: '250ms ease-in-out',
			'&:hover': {
				transform: 'scale(1.1)',
				color: theme.secondary,
				backgroundColor: theme.tertiary,
			},
		},
		detailsIcon: {
			backgroundColor: theme.primary,
			color: theme.secondary,
			borderRadius: '50%',
			width: '45px',
			height: '45px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '23px',
			transition: '250ms ease-in-out',
			flexShrink: 0,
			'&:hover': {
				transform: 'scale(1.1)',
				color: theme.secondary,
				backgroundColor: theme.tertiary,
			},
		},
		submitBtn: {
			backgroundColor: theme.primary,
			color: theme.secondary,
			transition: '250ms ease-in-out',
			'&:hover': {
				transform: 'scale(1.08)',
				color: theme.secondary,
				backgroundColor: theme.tertiary,
			},
		},
	}));

	const classes = useStyles();

	return (
		<div
			className="contacts"
			id="contacts"
			style={{ backgroundColor: theme.secondary }}
		>
			<div className="contacts--container">
				<h1 style={{ color: theme.primary }}>Contacts</h1>
				<div className="contacts-body">
					<Snackbar
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
						open={open}
						autoHideDuration={4000}
						onClose={handleClose}
					>
						<SnackbarContent
							action={
								<React.Fragment>
									<IconButton
										size="small"
										aria-label="close"
										color="inherit"
										onClick={handleClose}
									>
										<CloseIcon fontSize="small" />
									</IconButton>
								</React.Fragment>
							}
							style={{
								backgroundColor: theme.primary,
								color: theme.secondary,
								fontFamily: 'var(--primaryFont)',
							}}
						/>
					</Snackbar>

					<div className="contacts-details">
						<a
							href={`mailto:${contactsData.email}`}
							className="personal-details"
						>
							<div className={classes.detailsIcon}>
								<FiAtSign />
							</div>
							<p style={{ color: theme.tertiary }}>{contactsData.email}</p>
						</a>
						<div className="personal-details">
							<div className={classes.detailsIcon}>
								<HiOutlineLocationMarker />
							</div>
							<p style={{ color: theme.tertiary }}>{contactsData.address}</p>
						</div>
						<h2 style={{ color: theme.tertiary }}>Reach me at</h2>
						<div className="socialmedia-icons">
							<a href={`mailto:${contactsData.email}`}>
								<div className={classes.detailsIcon}>
									<FiAtSign />
								</div>
							</a>
							{socialsData.github && (
								<a
									href={socialsData.github}
									target="_blank"
									rel="noreferrer"
									className={classes.socialIcon}
								>
									<FaGithub aria-label="GitHub" />
								</a>
							)}
							{socialsData.linkedIn && (
								<a
									href={socialsData.linkedIn}
									target="_blank"
									rel="noreferrer"
									className={classes.socialIcon}
								>
									<FaLinkedinIn aria-label="LinkedIn" />
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
			<img src={theme.contactsimg} alt="contacts" className="contacts--img" />
		</div>
	);
}

export default Contacts;
