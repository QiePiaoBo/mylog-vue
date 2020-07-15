import base from './base';
import axios from '@/util/http';
// import qs from 'qs';

const user = {
  // 测试接口
  getUser() {
    return axios.get(`${base.user}/getUser`)
  }
}

export default user;
