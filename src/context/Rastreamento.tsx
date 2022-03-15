import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {
  BsCheck2Circle,
  BsClock,
  BsQuestionCircle,
  BsTruck,
} from 'react-icons/bs';
import { GiHandTruck, GiPostStamp } from 'react-icons/gi';

import { RastreamentoContextProps } from 'types/IContext';

import { getRastreio } from 'services/rastreio';
import { supabase } from 'services/supabase';

import { useAuth } from './Auth';

const Rastreamento = createContext<RastreamentoContextProps>(
  {} as RastreamentoContextProps
);

export function RastreamentoProvider({ children }: any) {
  const { user, setUser } = useAuth();
  const [codigoRastreio, setCodigoRastreio] = useState('');
  const [objeto, setObjeto] = useState([]);

  async function buscarRastreio() {
    try {
      if (codigoRastreio === '') {
        toast.error('Por favor, informe o código de rastreio.', {
          id: 'rastreio',
        });
      } else {
        toast.loading('Buscando informações do rastreio...', {
          id: 'rastreio',
        });

        const { data, status } = await getRastreio(codigoRastreio);

        if (status === 200) {
          if (data.objetos[0].eventos === undefined) {
            toast.error(data.objetos[0].mensagem, {
              id: 'rastreio',
            });
            setObjeto([]);
          } else {
            setObjeto(data.objetos[0]);
            toast.success('Informações do rastreio obtidas com sucesso.', {
              id: 'rastreio',
            });
          }
        }

        if (status !== 200) {
          toast.error('Não foi possível obter as informações do rastreio.', {
            id: 'rastreio',
          });
        }
      }
    } catch (error) {
      toast.error('Não foi possível obter as informações do rastreio.', {
        id: 'rastreio',
      });
    }
  }

  function handleChangeCodigoRastreio(e: { target: { value: string } }) {
    setCodigoRastreio(e.target.value.toUpperCase());
  }

  function handlePressEnter(e: { key: string }) {
    if (e.key === 'Enter') {
      buscarRastreio();
    }
  }

  function verificarEvento(evento: { codigo: string }) {
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

  function transformarDataEHora(data: string | number | Date) {
    const dataFormatada = new Date(data);
    return `${dataFormatada.getDate()}/
    ${dataFormatada.getMonth() + 1}/${dataFormatada.getFullYear()}
    ${dataFormatada.getHours()}:${dataFormatada.getMinutes()}`;
  }

  async function handleSaveRastreio(rastreio: string) {
    if (!user) {
      toast.error('Você precisa estar logado para salvar o rastreio', {
        id: 'login',
      });
      return;
    }

    if (codigoRastreio === '') {
      toast.error('Você precisa digitar um código de rastreio', {
        id: 'login',
      });
      return;
    }

    const rastreiosData = user.user_metadata.rastreios
      ? user.user_metadata.rastreios
      : [];

    if (rastreiosData.length !== 0)
      if (rastreiosData.find((r: string) => r === rastreio)) {
        toast.error('O rastreio já foi salvo', { id: 'login' });
        return;
      }

    rastreiosData.push(rastreio);

    const { user: userData, error } = await supabase.auth.update({
      data: { rastreios: rastreiosData },
    });

    if (error) {
      toast.error('Não foi possível salvar o rastreio', { id: 'login' });
    }

    toast.success('Rastreio salvo com sucesso', { id: 'login' });
    setUser(userData);
  }

  return (
    <Rastreamento.Provider
      value={{
        codigoRastreio,
        setCodigoRastreio,
        objeto,
        handleChangeCodigoRastreio,
        handlePressEnter,
        verificarEvento,
        transformarDataEHora,
        buscarRastreio,
        handleSaveRastreio,
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
