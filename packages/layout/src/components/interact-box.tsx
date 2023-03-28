import interact from 'interactjs'
import React, { useEffect, useRef } from 'react'
import { useLatest } from '@fusion/utils'

interface InteractBoxProps {
    onDrag?: (event: any) => void
    onResize?: (event: any) => void
    onRotate?: (event: any) => void
    children: React.ReactNode
}

export const InteractBox = (props: InteractBoxProps) => {
    const { children, onDrag, onResize, onRotate } = props
    const ref = useRef<HTMLDivElement>(null)
    const onDragRef = useLatest(onDrag)
    const onResizeRef = useLatest(onResize)
    const onRotateRef = useLatest(onRotate)
    
    useEffect(() => {
        const el = ref.current
        interact(el as HTMLDivElement)
        .draggable({
            listeners: {
                move: onDragRef.current
            }
        })
        .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            listeners: {
                move: onResizeRef.current,
            }
        })
        .gesturable({
            listeners: {
                move: onRotateRef.current,
            }
        })
    }, [onDragRef, onResizeRef, onRotateRef])
    
    return <div ref={ref}>{children}</div>
}