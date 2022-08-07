import axios from "axios";

const url = "http://localhost:5000/post";

const fetchpost = () => axios.get(url);

export default fetchpost;