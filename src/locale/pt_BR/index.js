import components from '@/demo/locale/pt_BR/components'
import route from './route'

export default {
  route,
  components,
  toolbar: {
    appname: 'Application',
    settings: 'Settings',
    profile: 'Profile',
    logout: 'Logout'
  },
  settings: {
    title: 'Configuração do Tema',
    default: 'Configuração Padrão',
    version: 'Version',
    position: 'Posição de elementos',
    theme: 'Tema',
    dark: 'Tema escuro',
    toolbarDense: 'Toolbar denso',
    navbarDense: 'Navbar denso',
    navbarLogo: 'Navbar logo',
    settingsBtn: 'Botão de Config',
    footer: 'Rodapé'
  },
  login: {
    titleIn: 'Formulário de Entrada',
    titleUn: 'Formulário de Cadastro',
    singIn: 'Entrar',
    singUp: 'Cadastrar',
    email: 'Email',
    password: 'Senha',
    confirm: 'Confirmar'
  },
  errors: {
    whoops: 'Ops!',
    back: 'Tire-me daqui',
    301: 'Movido Permanentemente',
    401: 'Não autorizado',
    403: 'Proibida',
    404: 'Não encontrado',
    500: 'Erro do Servidor Interno'
  },
  guide: {
    description: 'A página do guia é útil para algumas pessoas que entraram no projeto para ' +
      'da primeira vez. Você pode apresentar brevemente os recursos do projeto. A demonstração é baseada em',
    button: 'Mostrar Guia'
  },
  ui: {
    switch: 'Alternar idioma',
    theme: 'Alternar tema',
    success: 'Sucesso',
    error: 'Erro',
    warning: 'Atenção',
    info: 'Informação',
    primary: 'Primário',
    secondary: 'Secundário',
    default: 'Padrão',
    accent: 'Acentuado',
    firstName: 'Primeiro nome',
    lastName: 'Sobrenome',
    email: 'E-mail'
  }
}
