import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

// Global Style
import GlobalStyle from './globalStyle'

// Theme
import Theme from './theme'

// Components
import Header from '../header/index'
import Footer from '../footer/index'

export default ({
    children
}) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </ThemeProvider>
    )
}

// Styled Components
const Main = styled.main`
    padding-top:3rem;
    padding-bottom:3rem;
`