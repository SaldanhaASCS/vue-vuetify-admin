import components from '@/demo/locale/es_ES/components'
import route from './route'

export default {
  route,
  components,
  toolbar: {
    appname: 'App',
    settings: 'Configuración',
    profile: 'Datos personales',
    logout: 'Cerrar sesión'
  },
  settings: {
    title: 'Configuración de temas',
    default: 'Configuración predeterminada',
    version: 'Versión',
    position: 'Posición de los elementos.',
    theme: 'Tema',
    dark: 'Tema escuro',
    toolbarDense: 'Toolbar denso',
    navbarDense: 'Navbar denso',
    navbarLogo: 'Navbar Logo',
    settingsBtn: 'Botón de config',
    footer: 'Pie de página'
  },
  login: {
    titleIn: 'Formulario de entrada.',
    titleUn: 'Formulario de inscripción.',
    singIn: 'Iniciar sesión',
    singUp: 'Registrarse',
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirm: 'Confirmar'
  },
  errors: {
    whoops: 'Ops',
    back: '¡Sácame de aquí!',
    301: 'Movido Permanentemente',
    401: 'No autorizado',
    403: 'Prohibido',
    404: 'No encontrado',
    500: 'Error interno de servidor'
  },
  guide: {
    description: 'La página de guía es útil para algunas personas que ingresaron al proyecto para ' +
      'la primera vez. Puede presentar brevemente las características del proyecto. La demostración se basa en',
    button: 'Mostrar guía'
  },
  ui: {
    switch: 'Cambiar idioma',
    theme: 'Cambiar Tema',
    success: 'Éxito',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información',
    primary: 'Primario',
    secondary: 'Secundario',
    default: 'Predeterminado',
    accent: 'Acento',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'E-mail'
  }
}
