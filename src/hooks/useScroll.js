import { useEffect } from "react";
import { useState } from "react";

const useScroll = (elementRef) => {
	const [scroll, setScroll] = useState(0);

	const scrollHandler = (evt) => {
		const target = evt.target;

		const scrolled = target.scrollTop;
		const elementHeight = target.clientHeight;
		const maxHeight = target.scrollHeight;

		const scrollPercent = scrolled / (maxHeight - elementHeight);
		const scrollPercentRounded = Math.round(scrollPercent * 100);

		setScroll(scrollPercentRounded);
	};

	useEffect(() => {
		elementRef.current.addEventListener("scroll", scrollHandler);
	}, []);

	return scroll;
};

export default useScroll;
