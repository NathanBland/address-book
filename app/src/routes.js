export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/add-contact',
    name: 'add-contact',
    component: require('components/AddContactView')
  },
  {
    path: '/view-contact/:id',
    name: 'view-contact',
    component: require('components/ContactView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
