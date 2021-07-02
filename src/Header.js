import { BusinessCenterOutlined, ChatOutlined, HomeOutlined, NotificationsOutlined, SupervisorAccountOutlined } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import './Header.css';
import HeaderOption from './HeaderOption';

function Header() {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className="header">
			<div className="header_left">
				<img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
				
				<div className="header_search">
					<SearchIcon />
					<input placeholder="Search" type="text" />
				</div>
			</div>

			<div className="header_right">
				<HeaderOption Icon={ HomeOutlined } title="Home" />
				<HeaderOption Icon={ SupervisorAccountOutlined } title="My Network"/>
				<HeaderOption Icon={ BusinessCenterOutlined } title="Jobs"/>
				<HeaderOption Icon={ ChatOutlined } title="Messaging"/>
				<HeaderOption Icon={ NotificationsOutlined } title="Notifications"/>
				<HeaderOption avatar={true} onClick={logoutOfApp} title="Me"/>
			</div>
		</div>
	)
}

export default Header
