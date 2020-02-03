import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BufferGeometry,
    TextureLoader,
    AdditiveBlending,
    Points,
    PointsMaterial,
    Float32BufferAttribute,
} from 'three'

// Layout
import Container from '../../components/container'

// Components
import Button from '../../components/button/index'

// Assets
import Circle from '../../images/circle.svg'

export default ({
    title,
    description
}) => {
    const wrapper = useRef(null)
    const windowStatus = typeof window !== `undefined`

    // Scene Setup
    let camera, scene, renderer

    // Object Setup
    let geometry, textureLoader, parameters, materials, vertices
    
    if (windowStatus) {
        scene = new Scene()
        renderer = windowStatus && new WebGLRenderer({ alpha: true })

        // Add Objects to Scene
        geometry = new BufferGeometry()
        textureLoader = new TextureLoader()
        parameters = [10, 8, 2]
        materials = []
        vertices = []

        for ( var i = 0; i < 1000; i ++ ) {
            const x = Math.random() * 2000 - 1000
            const y = Math.random() * 2000 - 1000
            const z = Math.random() * 2000 - 1000
            vertices.push( x, y, z )
        }

        geometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) )

        for ( var d = 0; d < parameters.length; d ++ ) {
            const sprite = textureLoader.load( Circle )
            const size = parameters[ d ]

            materials[ d ] = new PointsMaterial( { size, map: sprite, blending: AdditiveBlending, depthTest: false, transparent: true, opacity: 0.4 } )
            materials[ d ].color.set(0xdf1f26)

            const particles = new Points( geometry, materials[ d ] )

            particles.rotation.x = Math.random() * 100
            particles.rotation.y = Math.random() * 100
            particles.rotation.z = Math.random() * 100

            scene.add( particles )
        }
    }


    const render = () => {
        renderer.render( scene, camera )
    }

    const animate = () => {
        const time = Date.now() * 0.00005

        for ( let j = 0; j < scene.children.length; j ++ ) {
            const object = scene.children[ j ]
    
            if ( object instanceof Points ) {
                object.rotation.y = time * ( j < 4 ? j + 1 : - ( j + 1 ) )
            }
        }
    
        requestAnimationFrame(animate)
        render(camera)
    }

    useEffect(() => {
        const width = wrapper.current.clientWidth
        const height = wrapper.current.clientHeight

        camera = new PerspectiveCamera( 100, width / height, 1, 2000 )
        renderer.setSize( width, height )

        animate(camera)
        wrapper.current.appendChild( renderer.domElement )

    }, [ wrapper, animate, renderer, camera ])
    return (
        <Section ref={wrapper}>
            <Container
                sm={`
                    z-index:1;
                    padding-top:3rem;
                    padding-bottom:3rem;
                `}
                lg={`
                    padding-top:6rem;
                    padding-bottom:6rem;
                `}
            >
                <Header>
                    <Title>
                        <Span>{`${title[0]} `}</Span>
                        {title[1]}
                    </Title>
                    <Border/>
                    <Paragraph>{description}</Paragraph>
                    <Button href={`/`}>{'Get a Free Quote'}</Button>
                </Header>
            </Container>
        </Section>
    )
}

// Styled Components
const Section = styled.section`
    ${props => `
        background-color: ${darken(0.45, props.theme.color.primary)};
    `}
    canvas {
        position: absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
    }
`
const Header = styled.header`
    display:grid;
    grid-template-columns:minmax(0,1fr);
    max-width:850px;
    @media (min-width:992px) {
        max-width:750px;
        grid-row-gap:1rem;
    }
`
const Title = styled.h1`
    color:${props => props.theme.color.primary};
    text-transform:uppercase;
    @media (min-width:992px) {
        font-size:4.5rem;
    }
`
const Span = styled.span`
    color:#fff;
    display:block;
    font-weight:normal;
    @media (min-width:992px) {
        font-size:2rem;
    }
`
const Paragraph = styled.p`
    color:#fff;
    @media (min-width:992px) {
        line-height:1.25;
        font-size:1.75rem;
    }
`
const Border = styled.hr`
    width: 20rem;
    height:0.25rem;
    background-color:${props => props.theme.color.primary};
    @media (min-width:992px) {
        width: 12rem;
        height:0.3rem;
    }
`