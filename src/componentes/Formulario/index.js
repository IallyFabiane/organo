import './formulario.css';
import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("#fff");

    function aoSalvar(event) {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" value={nome} aoAlterar={valor => setNome(valor)} />
                    <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" value={cargo} aoAlterar={valor => setCargo(valor)}/>
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" value={imagem} aoAlterar={valor => setImagem(valor)}/>
                    <ListaSuspensa obrigatorio={true} label="Times" itens={props.times} value={time} aoAlterar={valor => setTime(valor)}/>
                    <Botao>
                        Criar Card 
                    </Botao>
            </form>
            <form onSubmit={event => {
                event.preventDefault();
                props.cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do time" value={nomeTime} aoAlterar={valor => setNomeTime(valor)} />
                    <CampoTexto obrigatorio={true} label="Cor" placeholder="Digite a cor do time" value={corTime} aoAlterar={valor => setCorTime(valor)}/>
                    <Botao>
                        Criar Time
                    </Botao>
            </form>
        </section>
    );
}

export default Formulario;