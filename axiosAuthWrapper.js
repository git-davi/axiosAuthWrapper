
TOKEN_KEY = 'put-here-your-key'

export function axiosAuthWrapper(config, action=undefined) {
    config.headers = config.headers || {};
    config.headers.Authorization = 'Bearer ' + localStorage.getItem(TOKEN_KEY);
    
    return axios(config)
    .catch((err) => {
        if (err.response !== undefined && err.response.status === 401)
            action();
        throw err;
    });
}
