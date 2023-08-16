/* Usefull hook in case of dealing with responsiveness */

import { useEffect, useState } from 'react';

const debounce = (callback, waitTime) => {
	let timeNow = Date.now();
	return () => {
		if (timeNow - Date.now() + waitTime < 0) {
			callback();
			timeNow = Date.now();
		}
	};
};

const useResize = () => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	const handleSetWidth = () =>
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});

	useEffect(() => {
		handleSetWidth();
		const handler = debounce(handleSetWidth, 200);

		window.addEventListener('resize', handler);
		return () => window.removeEventListener('resize', handler);
	}, []);

	const breakpoint = {
    sm: size.width < 768,
		md: size.width >= 768,
		lg: size.width >= 992,
		xl: size.width >= 1200,
		xxl: size.width >= 1400,
	};

	return {
		...size,
		...breakpoint,
	};
};

export default useResize;