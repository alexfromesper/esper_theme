import React from 'react'

// Components
import Intro from './intro'

export default () => {
    return (
        <React.Fragment>
            <Intro
                title={[
                    `Results Driven`, 
                    `Web Design & Digital Marketing`
                ]}
                description={`Transforming your online presence into a revenue generator instead of a cost center.`}
            />
        </React.Fragment>
    )
}