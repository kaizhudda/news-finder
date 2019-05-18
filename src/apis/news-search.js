import axios from 'axios';

export default axios.create({
  baseURL: 'http://hn.algolia.com/api/v1/search?'
});
