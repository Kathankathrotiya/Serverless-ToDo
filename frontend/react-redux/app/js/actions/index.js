export const API_URL = ' https://5bt00t9lul.execute-api.us-east-1.amazonaws.com/dev/todos';

if (!API_URL) {
  console.error('Set `API_URL` in `app/js/actions/index.js` to your deployed endpoint')
}