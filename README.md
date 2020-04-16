# axiosAuthWrapper

Simple and elegant axios.js wrapper for bearer token authentication
### Requirements
- [axios](https://github.com/axios/axios)

## Setup

Place (or import) your TOKEN_KEY for local storage access inside axiosAuthWrapper.js.

## Usage

Example :

```javascript
import { axiosAuthWrapper as axiosAW } from './axiosAuthWrapper';

axiosAW({
    method: 'get',
    url: 'https://test.com/my/protected/route'
}, () => console.log('invalid token'));

```

This will print to browser console if the request was unauthorized (response code 401).

You are still able to treat this as a normal axios request promise.

```javascript
axiosAW({
    method: 'get',
    url: 'https://test.com/my/protected/route'
}, () => console.log('invalid token'))
.then((res) => console.log(res))
.catch((err) => console.log(err.response));

```
