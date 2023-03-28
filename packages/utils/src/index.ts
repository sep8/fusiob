import React from "react"

const trimString = (str: string) => str?.replace(/^\s+|\s+$/g, '')

export const useLatest = (value: any) => {
    const ref = React.useRef(value)
    ref.current = value
    return ref
}

export default trimString
