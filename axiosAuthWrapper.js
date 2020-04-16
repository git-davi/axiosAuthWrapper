
TOKEN_KEY = 'put-here-your-key'

export function axiosAuthWrapper({method, url, params=undefined, data=undefined}, action=undefined) {
    return axios({
        method: method,
        url: url,
        params: params,
        data: data,
        headers : { 'Authorization' : 'Bearer ' + localStorage.getItem(TOKEN_KEY) } 
    })
    .catch((err) => {
        if (err.response.status === 401)
            action();
        throw err;
    });
}