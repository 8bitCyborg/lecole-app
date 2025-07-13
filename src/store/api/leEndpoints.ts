const endpoints = [
  {
    name: 'Login',
    method: 'POST',
    url: '/auth/login',
    provideTags: [],
  },
  {
    name: 'Signup',
    method: 'POST',
    url: '/auth/register',
  },
  {
    name: 'GetSchools',
    method: 'GET',
    url: '/schools'
  },
  {
    name: 'GetSessions',
    method: 'GET',
    url: '/sessions'
  },
];

export default endpoints;