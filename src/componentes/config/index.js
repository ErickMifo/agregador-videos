const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://agregador-videos.herokuapp.com';

export default {
  URL,
};
