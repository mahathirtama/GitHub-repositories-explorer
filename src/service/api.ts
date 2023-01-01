import axios from "axios";


class BaseService {
  baseURL = '';

  constructor(subURL = '') {
    this.baseURL = `${process.env.REACT_APP_BASE_URL}${subURL}`;
  }

  async get(params = ''): Promise<any[] | any> {
    const res = await axios.get(`${this.baseURL}/${params}`);
    return res.data;
  }

  // only get Repo
   async getRepository(params = ''): Promise<any[] | any> {
    const res = await axios.get(`${this.baseURL}/${params}/repos`);
    return res.data;
  }

  async getOne(id: string | number, params = ''): Promise<any> {
    const res = await axios.get(`${this.baseURL}/${id}?${params}`);
    return res.data;
  }

  async post(payload: any = {}): Promise<any> {
    const res = await axios.post(`${this.baseURL}`, payload);
    return res.data;
  }

  async put(id: string | number, payload: any = {}): Promise<any> {
    const res = await axios.put(`${this.baseURL}/${id || ''}`, payload);
    return res.data;
  }

  async delete(id: number): Promise<any> {
    const res = await axios.delete(`${this.baseURL}/${id}`);
    return res.data;
  }
}

export default BaseService;