import './rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <a href="https://www.facebook.com" target="_blank" rel='noreferrer'><img src='/imagens/fb.png' alt='facebook'/></a>
                <a href="https://www.instagram.com" target="_blank" rel='noreferrer'><img src='/imagens/ig.png' alt='instagram'/></a>
                <a href="https://www.twitter.com" target="_blank" rel='noreferrer'><img src='/imagens/tw.png' alt='twitter'/></a>
            </div>
            <img className='logo' src='/imagens/logo.png' alt='logotipo organo'/>
            <p>Desenvolvido por Alura</p>
        </footer>
    );
}

export default Rodape;