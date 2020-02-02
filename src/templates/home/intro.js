import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../../components/container'

export default ({
    title,
    description
}) => {
    return (
        <Section>
            <Container>
                <h1>{title}</h1>
                <p>{description}</p>
            </Container>
        </Section>
    )
}

// Styled Components
const Section = styled.section`
    min-height:200vh;
`