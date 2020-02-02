import React from 'react'

// Components
import Intro from './intro'

export default () => {
    return (
        <React.Fragment>
            <Intro
                title={`Title`}
                description={`this is a test description`}
            />
        </React.Fragment>
    )
}