import './Card.css'
import Header from './Header'
import Links_Buttons from './Links_Buttons'
import Desc from './Desc'

export default function Card() {
    return (
        <>
            <div className='card--box'>
                <img className='card--bg' src='/images/bg.png' />
                <img className='card--profile' src='/images/jet.png' />

                <Header />
                <Links_Buttons />
                <Desc />
            </div>
            
        </>
    )
}