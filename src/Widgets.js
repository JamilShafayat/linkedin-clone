import { InfoOutlined } from '@material-ui/icons';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';
import './Widgets.css';

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets_article">
			<div className="widgets_articleLeft">
				<FiberManualRecordIcon />
			</div>

			<div className="widgets_articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets_header">
				<h2>Linkedin News</h2>
				<InfoOutlined />
			</div>
			{newsArticle('What is Lorem Ipsum?', 'Contrary to popular belief, Lorem Ipsum is not simply random text.')}		
			{newsArticle('Why do we use it?', 'Contrary to popular belief, Lorem Ipsum is not simply random text.')}		
			{newsArticle('Where does it come from?', 'Contrary to popular belief, Lorem Ipsum is not simply random text.')}		
			{newsArticle('Where can I get some?', 'Contrary to popular belief, Lorem Ipsum is not simply random text.')}		
			{newsArticle('1914 translation by H. Rackham', 'Contrary to popular belief, Lorem Ipsum is not simply random text.')}		
			{newsArticle('The standard, used since the 1500s', 'Contrary to popular belief, Lorem Ipsum is not simply random text.')}		
		</div>
	)
}

export default Widgets
