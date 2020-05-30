import fetch from 'node-fetch';

// Creates a fetcher to be passed into SWR
export default function fetcher(method, handle=null) {
    return (url) => fetch(url, {
        method: method.toUpperCase(),
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).then(handle === null ? r => r.json() : handle);
}