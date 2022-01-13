import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {
  BsCheck2Circle,
  BsClock,
  BsQuestionCircle,
  BsTruck,
} from 'react-icons/bs';
import { GiHandTruck, GiPostStamp } from 'react-icons/gi';

import { getRastreio } from 'services/rastreio';

const Rastreamento = createContext();

export function RastreamentoProvider({ children }) {
  const [codigoRastreio, setCodigoRastreio] = useState('');
  const [objeto, setObjeto] = useState([]);

  async function buscarRastreio() {
    if (codigoRastreio) {
      toast.loading('Buscando...', { id: 'codigoRastreio' });
      const result = await getRastreio(codigoRastreio);
      toast.success('Rastreio encontrado!', { id: 'codigoRastreio' });

      if (result.objetos[0].mensagem) {
        toast.error(result.objetos[0].mensagem, { id: 'codigoRastreio' });
        setObjeto([]);
      }

      setObjeto(result.objetos[0]);
    } else {
      toast('Informe o código de rastreio', { id: 'codigoRastreio' });
    }
  }

  function handleChangeCodigoRastreio(e) {
    setCodigoRastreio(e.target.value.toUpperCase());
  }

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      buscarRastreio();
    }
  }

  function verificarEvento(evento) {
    if (evento.codigo === 'BDI' || evento.codigo === 'BDE') {
      return (
        <div className="container-icon" style={{ background: '#6EAF2D' }}>
          <BsCheck2Circle color="#FFF" size={18} />
        </div>
      );
    }

    if (evento.codigo === 'LDI') {
      return (
        <div className="container-icon" style={{ background: '#A91717' }}>
          <BsClock color="#FFF" size={18} />
        </div>
      );
    }

    if (evento.codigo === 'PO') {
      return (
        <div className="container-icon" style={{ background: '#FECC06' }}>
          <GiPostStamp color="#FFF" size={18} />
        </div>
      );
    }
    if (evento.codigo === 'RO') {
      return (
        <div className="container-icon" style={{ background: '#000' }}>
          <BsQuestionCircle color="#FFF" size={18} />
        </div>
      );
    }

    if (evento.codigo === 'FC' || evento.codigo === 'OEC') {
      return (
        <div className="container-icon" style={{ background: '#3D8EB4' }}>
          <GiHandTruck color="#FFF" size={18} />
        </div>
      );
    }

    return (
      <div className="container-icon" style={{ background: '#EA9E00' }}>
        <BsTruck color="#FFF" size={18} />
      </div>
    );
  }

  function transformarDataEHora(data) {
    const dataFormatada = new Date(data);
    return `${dataFormatada.getDate()}/
    ${dataFormatada.getMonth() + 1}/${dataFormatada.getFullYear()}
    ${dataFormatada.getHours()}:${dataFormatada.getMinutes()}`;
  }

  return (
    <Rastreamento.Provider
      value={{
        objeto,
        handleChangeCodigoRastreio,
        handlePressEnter,
        verificarEvento,
        transformarDataEHora,
        buscarRastreio,
      }}
    >
      {children}
    </Rastreamento.Provider>
  );
}

export function useRastreamento() {
  const context = useContext(Rastreamento);
  if (!context) {
    throw new Error(
      'useRastreamento must be used within a RastreamentoProvider'
    );
  }
  return context;
}
