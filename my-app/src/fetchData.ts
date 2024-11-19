import axios from 'axios';
function wrapPromise(promise: Promise<any>) {
    let status = 'pending';
    let result: any;
    let suspender = promise.then(r => {
        status = 'success'
        result = r
    }, (e) => {
        status = 'error'
        result = e
    });

    return {
        read: () => {
            if(status === 'pending') {
                throw suspender
            } else if(status === 'success') {
                return result;
            } else if (status = 'error') {
                throw result;
            }
        }
    }
} 

export default function fetchData(url: string) {
    const promise = axios.get(url).then(rawData => rawData.data);
    return wrapPromise(promise);
}