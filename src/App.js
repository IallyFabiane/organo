import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    { id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8929',
      corSecundaria: '#FFEEDF'
    }

  ]);

  const [colaboradores, setColaboradores] = useState([]);

function mudarCorTime(corPrimaria, id) {
  setTimes(times.map(time => {
    if(time.id === id) {
      time.corPrimaria = corPrimaria;
    }

    return time;
  }));
}

  function aoNovoColaboradorAdicionado(colaborador) {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => {
        return <Time id={time.id} key={time.nome} aoDeletar={deletarColaborador} mudarCor={mudarCorTime} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />
      })}
      <Rodape />
    </div>
  );
}

export default App;
