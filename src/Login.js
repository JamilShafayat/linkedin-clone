import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
	const [name, setName] = useState("")
	const [profilePic, setProfilePic] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const dispatch = useDispatch()
	
	const loginToApp = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
		.then((userAuth) => {
			dispatch(login({
				email: userAuth.user.email,
				uid: userAuth.user.uid,
				displayName: userAuth.user.displayName,
				profileUrl: userAuth.user.photoURL,
			}));
		})
		.catch(error => alert(error));
	};

	const register = () => {
		if (!name) {
			return alert("Please enter a full name!");
		}
		
		auth.createUserWithEmailAndPassword(email, password)
		.then((userAuth) => {
			userAuth.user.updateProfile({
				displayName: name,
				photoURL: profilePic
			})
			.then(() => {
				dispatch(login({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: name,
					photoURL: profilePic
				}));
			})
		})
		.catch((error) => alert(error));
	};

	return (
		<div className="login">
			<img 
				src="https://camo.githubusercontent.com/f6223fba07e68ff03322358fa42b7a355d12b8ce3f7ca25ce3bc06ed17e65f39/68747470733a2f2f7777772e7061726564726f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30312f4c6f676f44656c4469254343253831612d4c696e6b6564496e2d756e2d656d626c656d612d7175652d657374612543432538312d323264656e74726f32322e6a7067"
				alt=""
			/>

			<form>
				<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
				<input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic URL (Optional)" type="text" />
				<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
				<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
				<button type="submit" onClick={loginToApp}>Sign In</button>
			</form>
			<p>
				Not a member?
				<span className="login_register" onClick={register}>Register Now</span>
			</p>
		</div>
	)
}

export default Login
