import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default ({
    external,
    children,
    href
}) => {
    return (
        external ? 
            <Button href={href}>{children}</Button>
        :
        <Button as={Link} to={href}>{children}</Button>
    )
}

// Styled Components
const Button = styled.a`
    background-color:${props => props.theme.color.primary};
    color:#fff;
    padding:1rem 1.5rem;
    display:inline-flex;
    width: fit-content;
    box-shadow: 0 0 25px rgba(223,31,38,.8);
    font-weight:bold;
    text-transform:uppercase;
    letter-spacing:0.15rem;
    &:hover {
        color:#fff;
    }
`