import axios from "axios"
const db = []
axios.get('http://localhost:9000/API/getall')
.then((res) => {
    return res.data
})
.catch((err) => {
    console.log(err);
});

