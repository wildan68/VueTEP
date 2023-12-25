import axios from '@axios'
import type { AxiosRequestConfig } from 'axios'

export const useApiServices = () => {
  const query = (url: string, query: any) => {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: { ...query }})
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error))  
    })
  }

  const get = async (url: string, config?: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      axios.get(url, config)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error))  
    })
  }

  const post = async (url: string, data: any, config?: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error))  
    })
  }

  const put = async (url: string, data: any, config?: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      axios.put(url, data, config)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error))  
    })
  }

  const patch = async (url: string, data: any, config?: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      axios.patch(url, data, config)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error))  
    })
  }

  const del = async (url: string, config?: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      axios.delete(url, config)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error))  
    })
  }

  return {
    query,
    get,
    post,
    put,
    patch,
    del,
  }
}