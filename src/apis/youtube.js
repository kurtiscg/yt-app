import axios from 'axios';

const KEY = 'AIzaSyDFOQ9SNc835B5-9IMiQ04LSQUGWxJVD4w';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
