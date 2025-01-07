//Import the modules
import encoding from 'k6/encoding';
import http from 'k6/http';
import { check } from 'k6';

//define the username and password
const username= 'durante'
const password= 'abc1232025'

//Exported function
export default function (){
    const credentials = `${username}:${password}`;
    const url =`http://localhost:8080/api/v3/user/login?username=${username}&password=${password}`;

    let res = http.get(url);

    //verify the response
    check(res, {
        'status is 200': (r) => r.status === 200,
        'is authenticated': (r) => r.body.includes('Logged in user session')
    })

    //creating custom headers for authentication
    const encodedCredentials = encoding.b64encode(credentials);
    const options = {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
        }
    }

    //second request
    res = http.get(`http://localhost:8080/api/v3/user/login?username=${username}&password=${password}`,options);

    //verification for the second request
    //verify the response
    check(res, {
        'status is 200': (r) => r.status === 200,
        'is authenticated': (r) => r.body.includes('Logged in user session')
    })
}