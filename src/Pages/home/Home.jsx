import React from 'react'
import Herosection from '../../components/home/Herosection'
import Cardsection from '../../components/home/Cardsection'
import Cartdropdown from '../../components/cart/Cartdropdown'

function Home() {
    return (
        <div>
            <Herosection />
            <Cardsection />
        </div>
    )
}

export default Home