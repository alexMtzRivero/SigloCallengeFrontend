
import env from "../env.js"
let defaultResponse = (response)=>{
    if (!response.ok) {
        //todo: change for something pretty 
        alert(response.statusText)
        return {}
    }
    return response.json()
}

const getDefaultHeaders = (method='get',payload)=>{
    let headers = {
        method: method,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    }
    if(payload){
        headers.body = JSON.stringify(payload)
    }
    return headers
}

const callApi = (url,method="get",payload)=>{
    return new Promise((resolve, reject) => {
        return fetch(`${env.apiHost}/${url}`,getDefaultHeaders(method,payload))
        .then((response)=>{
            if(response.ok){
                if(method == "delete")
                    resolve()
                else
                    resolve(defaultResponse(response))
            }
            else
            reject(response)
        },(error)=>{
            reject(error)
        });
    }) 
}

export default callApi