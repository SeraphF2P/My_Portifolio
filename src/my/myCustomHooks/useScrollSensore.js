import { useRef, useEffect } from 'react';
import { debounce, throttle } from '../performance';

export default function useScrollSensore(options, ...conditionly) {
    const { from = '', to = '', holdFor = 1000,
        onHold = '', throttleDelay = 100, scrollOnX = false,
        condition = [], selector = null } = { ...options };

    const elementRef = useRef(null);
    const scrollEle = useRef(null);
    const scrollVal = useRef(0);
    let scrollMode;
    let scrollHandler = () => {
        if (selector != null) {
            scrollMode = document.querySelector(selector).scrollTop;
        } else {
            scrollMode = (scrollOnX ? scrollX : scrollY);
        }
        if (scrollVal.current < scrollMode) {
            scrollVal.current = scrollMode;
            elementRef.current.style = to;
        } else if (scrollVal.current > scrollMode) {
            scrollVal.current = scrollMode;
            elementRef.current.style = from;
        }

        if (conditionly == []) return
        conditionly.map((cb, ind) => {
            if (typeof cb() == "function") {
                if (cb()) {
                    elementRef.current.style = condition[ind];
                }
            } else if (cb) {
                elementRef.current.style = condition[ind];
            }
        })
    };
    function scrollStop() { elementRef.current.style = onHold; }
    useEffect(() => {
        scrollEle.current = (document.querySelector(selector) ? document.querySelector(selector) : window);
        scrollEle.current.addEventListener("scroll", throttle(scrollHandler, throttleDelay));
        return () => {
            scrollEle.current.removeEventListener("scroll", throttle(scrollHandler, throttleDelay));
        };
    }, [...conditionly]);
    useEffect(() => {
        (onHold != "") && scrollEle.current.addEventListener("scroll", debounce(scrollStop, holdFor));
        return () => {
            (onHold != "") && scrollEle.current.removeEventListener("scroll", debounce(scrollStop, holdFor));
        };
    }, [onHold]);

    return elementRef;
}