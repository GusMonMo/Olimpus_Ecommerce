import './CSS/header.css'
import Link from 'next/link'
import Logo from './logo'
export default function Header(){

    return(
        <>
        <header>
            <Link href='/'>
                <Logo height="7vw" width="7vw" fontSize='1.5vw' fontColor= 'black'/>
            </Link>
            <ul className='navContainer'>
                <li>
                    <Link href='/'>
                        <h2 className='navegacao'>LANÇAMENTOS</h2>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <h2 className='navegacao'>PROMOÇÃO</h2>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <h2 className='navegacao'>VESTUÁRIO</h2>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <h2 className='navegacao'>COLEÇÕES</h2>
                    </Link>
                </li>
            </ul>
            <Link  href='/login'>
                <div className='login'/>
            </Link>
            <div className='sacola'>
                <div className='sacolaIcon'/>
                <h4>0</h4>
            </div>
        </header>
        <div className='freteGratis'>
            <h4>FRETE GRÁTIS a partir de R$ 100,00 para todo Brasil.</h4>
        </div>
        </>
    )
}