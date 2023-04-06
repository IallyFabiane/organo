import './formulario.css';
import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    function aoSalvar(event) {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" value={nome} aoAlterar={valor => setNome(valor)} />
                    <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" value={cargo} aoAlterar={valor => setCargo(valor)}/>
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" value={imagem} aoAlterar={valor => setImagem(valor)}/>
                    <ListaSuspensa obrigatorio={true} label="Times" itens={times} value={time} aoAlterar={valor => setTime(valor)}/>
                    <Botao>
                        Criar Card 
                    </Botao>
            </form>
        </section>
    );
}

export default Formulario;