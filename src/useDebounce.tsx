import { useEffect, useState } from "react";

/**
 * 实现函数式防抖
 * @param value 需要防抖的值
 * @param delay 延时多少秒
 * @returns 防抖之后的新值
 */
function useDebounce(value: any, delay = 300) {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handle = window.setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => clearTimeout(handle)
    }, [value, delay])
    return debounceValue
}
export default useDebounce
