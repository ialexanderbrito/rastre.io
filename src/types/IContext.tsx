/* eslint-disable no-unused-vars */

export type AppMetadata = {
  provider: string;
  providers: string[];
};

export type UserMetadata = {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
  rastreios: string[];
  sub: string;
};

export type IdentityData = {
  sub: string;
  avatar_url: string;
  email: string;
  email_verified?: boolean;
  full_name: string;
  iss: string;
  name: string;
  picture: string;
  provider_id: string;
};

export type Identity = {
  id: string;
  user_id: string;
  identity_data: IdentityData;
  provider: string;
  last_sign_in_at: Date;
  created_at: Date;
  updated_at: Date;
};

export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: Date;
  phone: string;
  confirmation_sent_at: Date;
  confirmed_at: Date;
  last_sign_in_at: string;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  identities: Identity[];
  created_at: Date;
  updated_at: Date;
};

export type UserAuth = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  user: User;
};

export type Endereco = {
  cidade: string;
  uf: string;
  bairro: string;
  cep: string;
  logradouro: string;
  numero: string;
};

export type Unidade = {
  endereco: Endereco;
  tipo: string;
  codSro: string;
  nome: string;
};

export type Endereco2 = {
  cidade: string;
  uf: string;
};

export type UnidadeDestino = {
  endereco: Endereco2;
  tipo: string;
  codSro: string;
  nome: string;
};

export type Destinatario = {};

export type Evento = {
  codigo: string;
  descricao: string;
  dtHrCriado: Date;
  tipo: string;
  unidade: Unidade;
  urlIcone: string;
  unidadeDestino: UnidadeDestino;
  destinatario: Destinatario;
};

export type TipoPostal = {
  categoria: string;
  descricao: string;
  sigla: string;
};

export type Objeto = {
  codObjeto: string;
  eventos: Evento[];
  modalidade: string;
  tipoPostal: TipoPostal;
  habilitaAutoDeclaracao: boolean;
  permiteEncargoImportacao: boolean;
  habilitaPercorridaCarteiro: boolean;
  bloqueioObjeto: boolean;
  possuiLocker: boolean;
  habilitaLocker: boolean;
  habilitaCrowdshipping: boolean;
};

export type Rastreamento = {
  objetos: Objeto[];
  quantidade: number;
  resultado: string;
  versao: string;
};

export type AuthContextProps = {
  user: User | null;
  setUser: (user: any) => void;
  values: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  setValues: (values: {
    username: string;
    password: string;
    passwordConfirm: string;
  }) => void;
  handleLoginSubmit: (e: any) => void;
  handlePageRegistrar: () => void;
  handleRegisterSubmit: (e: any) => void;
  handlePageLogin: () => void;
  handleLogout: () => void;
  handleLoginGoogle: () => void;
  handleLoginGithub: () => void;
};

export type CepContextProps = {
  cep: string;
  allCep: any;
  buscarCep: () => void;
  handleChangeCep: (e: any) => void;
  handlePressEnter: (e: any) => void;
  formatarCep: (cep: string) => string;
};

export type RastreamentoContextProps = {
  codigoRastreio: string;
  setCodigoRastreio: (codigoRastreio: string) => void;
  objeto: any;
  handleChangeCodigoRastreio: (e: { target: { value: string } }) => void;
  handlePressEnter: (e: any) => void;
  verificarEvento: (e: any) => void;
  transformarDataEHora: (dataEHora: string | number | Date) => string;
  buscarRastreio: () => void;
  handleSaveRastreio: (rastreio: string) => void;
};

export type ThemeContextProps = {
  theme: string;
  switchTheme: () => void;
};
