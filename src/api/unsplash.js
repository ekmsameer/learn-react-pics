import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers :{
        Authorization : 'Client-ID F-KqaK1QXb1z14Eh2ZFTyh0orBPnFCgsRDgX8lfgf-g'
    }
})