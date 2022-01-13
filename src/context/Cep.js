import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { getCep } from 'services/cep';

const Cep = createContext();

export function CepProvider({ children }) {
  const [cep, setCep] = useState('');
  const [allCep, setAllCep] = useState([]);

  async function buscarCep() {
    if (cep) {
      if (cep.length === 8) {
        toast.loading('Buscando CEP...', { id: 'cep' });
      } else {
        toast.error('CEP inválido', { id: 'cep' });
        setAllCep([]);
        return;
      }

      toast.loading('Buscando CEP...', { id: 'cep' });
      const result = await getCep(cep);

      toast.success('CEP encontrado!', { id: 'cep' });

      if (result.erro) {
        toast.error('CEP não encontrado!', { id: 'cep' });
        setAllCep([]);
      }

      setAllCep(result);
    } else {
      toast('Informe um CEP!', { id: 'cep' });
    }
  }

  function handleChangeCep(e) {
    const cepValue = e.target.value.replace(/[^0-9]/g, '');
    setCep(cepValue);
  }

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      buscarCep();
    }
  }

  function formatarCep() {
    return cep.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
  }

  return (
    <Cep.Provider
      value={{
        cep,
        allCep,
        buscarCep,
        handleChangeCep,
        handlePressEnter,
        formatarCep,
      }}
    >
      {children}
    </Cep.Provider>
  );
}

export function useCep() {
  const context = useContext(Cep);
  if (!context) {
    throw new Error('useCep must be used within a CepProvider');
  }
  return context;
}
