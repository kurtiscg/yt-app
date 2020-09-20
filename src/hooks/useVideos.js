import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	// Equivilant to componentDidMount
	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		// When we set functional state, we use brackets because its a function
		setVideos(response.data.items);
	};

	// Can follow convention of react and return arrays, or more common in community and return the javascript objects
	return [videos, search];
	//return { videos, search };
};

export default useVideos;
