import Colaborador from '../Colaborador';
import './time.css';

const Time = (props) => {
    return (
        
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <input value={props.corPrimaria} type='color' className='input-cor' onChange={event => props.mudarCor(event.target.value, props.id)} />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeltar={colaborador.aoDeletar} />
                })}
            </div>
        </section>
    );
}

export default Time;