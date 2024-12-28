import Link from 'next/link'
import './CSS/footer.css'
import Logo from './logo'
export default function Footer(){
    return (
        <footer>
            <div className="footer">
                <Link href='/'>
                    <Logo height="14vw" width="14vw" fontSize='2.5vw' fontColor='white'/>
                </Link>
                <div className='linksFooter'>
                    <h3>
                        <Link href="/quem_somos">Quem Somos</Link>
                    </h3>
                    <h3>
                        <Link href="/politica"> Política de Privacidade</Link>
                    </h3>
                    <h3>
                        <Link href="/duvidas_frequentes">Dúvidas Frequentes</Link>
                    </h3>
                    <h3>
                        <Link href="/trocas_devolucoes">Trocas e Devoluções</Link>
                    </h3>
                </div>
                <div className='contactFooter'>
                    <div className='containerContact'>
                        <div className='Icon instagramIcon'/>
                        <h3>Olimpus_Store</h3>
                    </div>
                    <div className='containerContact'>
                        <div className='Icon phoneIcon'/>
                        <h3>(99)9999-9999</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}