import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../container'

export default () => {
    return (
        <Footer>
            <Container>
                <h1>{`This is a footer`}</h1>
            </Container>
        </Footer>
    )
}

// Styled Components
const Footer = styled.footer`

`