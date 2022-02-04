import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { supabase } from 'services/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [values, setValues] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  });

  useEffect(() => {
    const userData = supabase.auth.user();

    if (userData) {
      setUser(userData);
    } else {
      navigate('/');
    }
  }, []);

  async function handleLoginSubmit(event) {
    event.preventDefault();

    const { user: userData, error } = await supabase.auth.signIn({
      email: values.username,
      password: values.password,
    });

    if (error && error.message === 'Invalid login credentials') {
      toast.error('Usuário ou senha inválidos', { id: 'login' });
      return;
    }

    if (error && error.message === 'Email not confirmed') {
      toast.error('Por favor, confirme seu email', { id: 'login' });
      return;
    }

    if (error) {
      toast.error('Erro ao logar', { id: 'login' });
      return;
    }

    setUser(userData);
    toast.success('Login realizado com sucesso', { id: 'login' });

    navigate('/rastreio');
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();

    if (values.password !== values.passwordConfirm) {
      toast.error('As senhas não conferem', { id: 'login' });
      return;
    }
    if (values.password.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres', { id: 'login' });
      return;
    }

    const { user: userData, error } = await supabase.auth.signUp({
      email: values.username,
      password: values.password,
    });

    if (error) {
      toast.error('Usuário já cadastrado', { id: 'login' });
      return;
    }

    setUser(userData);

    toast.success('Usuário criado com sucesso', { id: 'login' });

    navigate('/');
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error('Erro ao deslogar', { id: 'login' });
      return;
    }

    toast.success('Deslogado com sucesso', { id: 'login' });
    setUser(null);

    navigate('/');
  }

  function handlePageLogin() {
    navigate('/');
  }

  function handlePageRegistrar() {
    navigate('/registrar');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        values,
        setValues,
        handleLoginSubmit,
        handlePageRegistrar,
        handleRegisterSubmit,
        handlePageLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
