import axios from 'axios';
import {swalFail, swalSuccess} from '../utils/swalResponse';

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

  async createData(endpoint, body, authorization) {
    let data;
    if(!authorization){
      data = await axios.post(`${this.hostAPI}/${endpoint}`, body);
      swalSuccess(data.data.message);
    }else{
      data = await axios.post(`${this.hostAPI}/${endpoint}`, body, {
        headers: { Authorization : `Bearer ${authorization.token}`}
      });
      swalSuccess(data.data.message);
    }
  }
  async updateData(endpoint, body, authorization) {
    let data;
    if(!authorization){
      data = await axios.put(`${this.hostAPI}/${endpoint}`, body);
      swalSuccess(data.data.message);
    }else{
      data = await axios.put(`${this.hostAPI}/${endpoint}`, body, {
        headers: { Authorization : `Bearer ${authorization.token}`}
      });
      swalSuccess(data.data.message);
    }
  }

  async deleteById(endpoint, authorization) {
    let data;
    if(!authorization){
      data = await axios.delete(`${this.hostAPI}/${endpoint}`);
      swalSuccess(data.data.message);
    }else{
      data = await axios.delete(`${this.hostAPI}/${endpoint}`, {
        headers: { Authorization : `Bearer ${authorization.token}`}
      });
      swalSuccess(data.data.message);
    }
  }

}

const httpRequest = new HttpRequest();

export default httpRequest;