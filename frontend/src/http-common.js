import axios from "axios";
import configData from './apiConfig.json'

export default axios.create({
baseURL: configData['url'],
headers: {
    "Content-type": "application/json"
}
});