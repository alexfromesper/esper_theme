import React from 'react'
import styled from 'styled-components'

export default ({
    children,
    fullWidth,
    sm,
    md,
    lg,
    xl
}) => (
    <Wrapper
        fullWidth={fullWidth}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
    >
        {children}
    </Wrapper>
)

const Wrapper = styled.div`
    position:relative;
    ${props => props.fullWidth ? `
        max-width: 100%;
    ` : `
        max-width: calc(100% - ${props.theme.gutter});
    `}
    margin:0 auto;
    ${props => props.sm};
    @media (min-width:768px) {
        ${props => props.md};
    }
    @media (min-width:992px) {
        ${props => props.lg};
    }
    @media (min-width:1200px) {
        ${props => props.xl};
        ${props => !props.fullWidth && `width: 1170px;`};
    }
`