import { useCallback, useEffect, useState } from 'react';

const CLOSE_TO_TOP_THRESHOLD = 100;

function useScrollPosition() {
    const [scrollPos, setScrollPos] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [closeToTop, setCloseToTop] = useState(true);
    const [aboveTheFold, setAboveTheFold] = useState(true);

    const [scrollElem, setScrollElem] = useState(null);
    const [scrollOffsetProp, setScrollOffsetProp] = useState(null);

    useEffect(() => {
        const _scrollElem = window; //mq.tablet.down ? document.body : window;

        const _scrollOffsetProp = 'scrollY'; //mq.tablet.down ? 'scrollTop' : 'scrollY';

        setScrollElem(_scrollElem);
        setScrollOffsetProp(_scrollOffsetProp);
    }, []);

    const listenScrollEvent = useCallback(
        (e) => {
            if (!scrollElem || !scrollOffsetProp) return;

            if (scrollPos > scrollElem[scrollOffsetProp]) {
                setScrollDirection('up');
            } else if (scrollPos < scrollElem[scrollOffsetProp]) {
                setScrollDirection('down');
            }

            setAboveTheFold(scrollElem[scrollOffsetProp] < window.innerHeight);
            setCloseToTop(
                scrollElem[scrollOffsetProp] < CLOSE_TO_TOP_THRESHOLD,
            );
            setScrollPos(scrollElem[scrollOffsetProp]);
        },
        [scrollPos, scrollElem, scrollOffsetProp],
    );

    useEffect(() => {
        if (!scrollElem || !scrollOffsetProp) return;

        scrollElem.addEventListener('scroll', listenScrollEvent);
        listenScrollEvent();

        return () =>
            scrollElem.removeEventListener('scroll', listenScrollEvent);
    }, [listenScrollEvent]);

    return {
        scrollDirection,
        scrollPos,
        closeToTop,
        aboveTheFold,
    };
}

export default useScrollPosition;
