import React from 'react'
import BarraNavegacion from '../components/BarraNavegacion'
import Footer from '../components/Footer/Footer'

interface Props {
    children: React.ReactNode,
}

const LayoutLading = (props: Props) => {
    return (
        <>
            <BarraNavegacion />
            {props.children}
            <Footer />
        </>
    )
}

export default LayoutLading