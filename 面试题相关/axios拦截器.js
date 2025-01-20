class SimpleAxios {
    constructor() {
      this.requestInterceptors = [];
      this.responseInterceptors = [];
    }
  
    // 添加请求拦截器
    useRequestInterceptor(fn) {
      this.requestInterceptors.push(fn);
    }
  
    // 添加响应拦截器
    useResponseInterceptor(fn) {
      this.responseInterceptors.push(fn);
    }
  
    // 发送请求
    async request(config) {
      // 执行请求拦截器
      for (const interceptor of this.requestInterceptors) {
        config = interceptor(config);
      }
  
      // 模拟发送请求
      let response = await this._sendRequest(config);
  
      // 执行响应拦截器
      for (const interceptor of this.responseInterceptors) {
        response = interceptor(response);
      }
  
      return response;
    }
  
    // 模拟请求发送
    async _sendRequest(config) {
      // 这里模拟返回一个响应
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: 'response data', config });
        }, 1000);
      });
    }
  }
  
  // 使用示例
  const axios = new SimpleAxios();
  
  // 添加请求拦截器
  axios.useRequestInterceptor(config => {
    console.log('Request Interceptor:', config);
    config.headers = { Authorization: 'Bearer token' };
    return config;
  });
  
  // 添加响应拦截器
  axios.useResponseInterceptor(response => {
    console.log('Response Interceptor:', response);
    response.data = `Processed: ${response.data}`;
    return response;
  });
  
  // 发送请求
  axios.request({ url: '/api/data', method: 'GET' })
    .then(response => {
      console.log('Response:', response);
    });