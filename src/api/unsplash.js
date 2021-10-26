import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID jKlWHNNs1cTOVQsc4DwU0FUU2-eNJ-mEhiGd1Mtdgn8'
    }
});