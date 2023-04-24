import http from "../http-common";



const addImage = async (image) => {
    const response = await http.post('/api/addImage', image).catch(error => {
        console.log(error.response);
        return error.response;
    })
    console.log(response);
    return response;
}
const deleteImage = async (image) => {
    const response = await http.delete('/delete/' + image.imageId).catch(error => {
        console.log(error.response);
        return error.response;
    })
    console.log(response);
    return response;
}
const updateImage = async (image) => {
    const response = await http.post('/update', image).catch(error => {
        console.log(error.response);
        return error.response;
    })
    console.log(response);
    return response;
}
const getAllImage = async () => {
    const response = await http.get('/get-all');
    console.log(response);
    return response;
}
const getImageById = async  (fileName) => {
    const response = await http.post('/api/' + fileName);
    console.log(response);
    return response;
}

const service={ getImageById, getAllImage, addImage, updateImage, deleteImage }
export default service;
