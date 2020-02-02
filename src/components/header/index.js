import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

// Components
import Container from '../container'

export default () => {
    const [fixed, setFixed] = useState(false)

    const wrapper = useRef(null)

    useEffect(() => {
        const isDefined = typeof window !== 'undefined'
        console.log('updated')
        if (isDefined) {

            const handleScroll = () => {
                const isScroll = window.scrollY > 1

                if (isScroll) {
                    return setFixed(true)
                }

                return setFixed(false)
            }

            handleScroll()

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [ fixed ])
    return (
        <Header 
            ref={wrapper}
            fixed={fixed}
        >
            <Container>
                <h1>{`this is a header`}</h1>
            </Container>
        </Header>
    )
}

// Styled Components
const Header = styled.header`
    height: 4.5rem;
    position:fixed;
    width:100%;
    left:0;
    top:0;
    background-color: #fff;
    z-index:9;
    ${props => props.fixed && `
        box-shadow: rgba(0, 0, 0, 0.17) 0px 1px 5px;
    `}
`