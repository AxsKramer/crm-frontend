import axios from 'axios';



class HttpRequest{

  constructor(){
    this.hostAPI = 'http://localhost:3000/api';
  }

  async getAll(endpoint, authorization) {
    let data;
      if(!authorization){
        data = await axios.get(`${this.hostAPI}/${endpoint}`)
      }else{
        data = await axios.get(`${this.hostAPI}/${endpoint}`, {
          headers: { Authorization : `Bearer ${authorization.token}`}
        });
      }
      return data.data;    
  }

  async getById(endpoint, authorization) {
    let data;
    if(!authorization){
      data = await axios.get(`${this.hostAPI}/${endpoint}`)
    }else{
      data = await axios.get(`${this.hostAPI}/${endpoint}`, {
        headers: { Authorization : `Bearer ${authorization.token}`}
      });
    }
    return data.data;
  }

  async createData(endpoint, body, authorization, contentType) {
    let data;
    if(!authorization){
      if(contentType){
        data = await axios.post(`${this.hostAPI}/${endpoint}`, body, {"Content-Type": "multipart/form-data"});
      }else{
        data = await axios.post(`${this.hostAPI}/${endpoint}`, body);
      }
    }else{
      data = await axios.post(`${this.hostAPI}/${endpoint}`, body, {
        headers: { Authorization : `Bearer ${authorization.token}`}
      });
    }
    return data.data;
  }
  async updateData(endpoint, body, authorization) {
    let data;
    if(!authorization){
      data = await axios.put(`${this.hostAPI}/${endpoint}`, body);
    }else{
      data = await axios.put(`${this.hostAPI}/${endpoint}`, body, {
        headers: { Authorization : `Bearer ${authorization.token}`}
      });
    }
    return data.data;
  }

  async deleteById(endpoint, authorization) {
    let data;
    if(!authorization){
      data = await axios.delete(`${this.hostAPI}/${endpoint}`);
    }else{
      data = await axios.delete(`${this.hostAPI}/${endpoint}`, {
        headers: { Authorization : `Bearer ${authorization.token}`}
      });
    }
    return data.data;
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;