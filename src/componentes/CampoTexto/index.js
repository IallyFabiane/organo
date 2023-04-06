import './campoTexto.css';

const CampoTexto = (props) => {

    function aoDigitar(event) {
      props.aoAlterar(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    );
}

export default CampoTexto;