import { useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'

const colorFade = keyframes`
    0% {fill: green; stroke-width: 2px}
    50% {fill: aquamarine; stroke-width: 6px}
    100% {fill: green; stroke-width: 2px}
`

const Circle = styled.circle`
    animation: ${props => props.animated ? css`3s ${colorFade} linear infinite` : 'none'};
    fill: ${props => props.animated ? 'inherit' : 'blue'};
    animation-direction: alternate;
`

const Box = styled.rect`
    animation: ${props => props.animated ? css`3s ${colorFade} linear infinite` : 'none'};
    fill: ${props => props.animated ? 'inherit' : 'blue'};
    animation-direction: alternate;
`

const Svg = styled.svg`
    margin: 10px;
`

export default ({index, animated, isSquare, transformSquare}) => {
    
    useEffect(() => {
        if (index && index % 7 === 0) transformSquare()
    }, [])
    
    return (
        <div>
            { !isSquare ? (
                <Svg height="100" width="100">
                    <Circle animated={animated} cx="50" cy="50" r="25" stroke="black"></Circle>
                    <text x="50" y="50">{index}</text>
                </Svg>
            ) : (
                <Svg height="100" width="100">
                    <Box animated={animated} x="25" y="25" width="50" height="50" stroke="black"></Box>
                    <text x="50" y="50">{index}</text>
                </Svg>
            )}
        </div>
    )
}