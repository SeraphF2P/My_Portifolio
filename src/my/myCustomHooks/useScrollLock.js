
import { useEffect, useRef } from "react";

export default function useScrollLock(locked, selector = '', scrollX = false) {
    const ele = useRef()
    const stylerRule = useRef()
    const customClass = useRef("")
    useEffect(() => {
        stylerRule.current = document.styleSheets.item(0)
        customClass.current = `scrollLock${crypto.randomUUID()}`;
    }, [])
    useEffect(() => {
        const cssProperty = scrollX ? "overflow-y" : "overflow-x";
        stylerRule.current.insertRule(`.${customClass.current}{ ${cssProperty}:hidden !important}`, document.styleSheets.length)
        ele.current = selector ? document.querySelector(selector) : window;
        ele.current.classList.toggle(customClass.current, locked)
    }, [locked, ele])

}