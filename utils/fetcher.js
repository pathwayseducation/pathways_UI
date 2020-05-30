import fetch from 'node-fetch';

// Creates a fetcher to be passed into SWR
export default function fetcher(method, headers=null, body=null, handle=null) {
    let request = {
        method: method.toUpperCase(),
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem('token')
        }
    };
    if(body !== null) request.body = body;
    if(headers !== null) request.headers = {...request.headers, ...headers};
    
    return (url) => fetch(url, request).then((handle === null) ? (r => r.json()) : handle);
}