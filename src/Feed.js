import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Feed.css';
import { db } from './firebase';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {
	const user = useSelector(selectUser);
	console.log('user', user)
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data()
				}))
			)
		);
	}, [])

	const sendPost = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			name: user?.displayName || 'Jamil',
			description: user.email,
			message: input,
			photoUrl: user.photoUrl || '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		setInput('')
	}

	return (
		<div className="feed">
			<div className="feed_inputContainer">
				<div className="feed_input">
					<CreateOutlinedIcon />
					<form>
						<input value={ input } onChange={e => setInput(e.target.value)} type="text" />
						<button onClick={sendPost} type="submit">Send</button>
					</form>
				</div>
				<div className="feed_inputOptions">
					<InputOption Icon={ ImageOutlinedIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={ SubscriptionsOutlinedIcon} title="Video" color="#E7A33E" />
					<InputOption Icon={ EventNoteOutlinedIcon} title="Event" color="#C0CBCD" />
					<InputOption Icon={ CalendarViewDayOutlinedIcon} title="Write Article" color="#7FC15E" />
				</div>
			</div>
			<FlipMove>
				{posts.map(({ id, data: { name, description, message, photoUrl }})=>(
					<Post 
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}	
			</FlipMove>
		</div>
	)
}

export default Feed
