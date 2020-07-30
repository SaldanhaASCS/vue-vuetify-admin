export * from '@/api/mock_chart'

export const lorem = `Lorem ipsum dolor sit amet, mel at clita quando.
   Te sit oratio vituperatoribus,
   nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi
   vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`

export const landingInfo = {
  title: 'Vue Vuetify Admin',
  email: 'example@mail.com',
  phone: '+79876543210',
  address: 'Yekaterinburg'
}

export const userAdmin = {
  email: 'admin@vvadmin.io',
  password: 'abcd1234',
  user: 'Admin',
  status: 'admin',
  code: '',
  token: '3b759a9ca80234563d87672350659b2b',
  name: 'Admin',
  avatar: 'https://avatars1.githubusercontent.com/u/35805817?s=460&u=45bcb6a78d52306f7affc245c2d55e38b586c9c6&v=4',
  roles: ['admin', 'editor', 'visitor'] // Determines which routes are displayed in the side menu.
}

export const userEditor = {
  email: 'editor@vvadmin.io',
  password: 'abcd1234',
  user: 'Editor',
  status: 'Editor',
  code: '',
  token: '09d0a5b30b267c2504fadd43348fbba3',
  name: 'Editor Name',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6_dXRBg2AgAHroCKU_I___QhM__nSAdV8Ww&usqp=CAU',
  roles: ['editor']
}

export const userVisitor = {
  email: 'visitor@vvadmin.io',
  password: 'abcd1234',
  user: 'Visitor',
  status: 'Visitor',
  code: '',
  token: '19d0a5b30b267c2504fadd43348fbba3',
  name: 'Visitor Name',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsjSA06kBMwSkJckjzqobaCuRjPStOERjuOQ&usqp=CAU',
  roles: ['visitor']
}
