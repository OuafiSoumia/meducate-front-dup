import axios, { AxiosInstance } from 'axios'
import { LoginParams } from 'src/context/types'
import { PersonalInfo, ProfessionalInfo } from 'src/types/apps/register'

declare module 'axios' {
  export interface AxiosInstance {
    registerUser: (user: Partial<PersonalInfo & ProfessionalInfo>) => Promise<any>
    verifyEmail: (token: string) => Promise<any>
    requestVerificationEmail: (email: string) => Promise<any>
    login: (params: LoginParams) => Promise<any>
    me: () => Promise<any>
  }
}

// Create an instance of axios with default configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // API URL from env
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  (config: any) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

export default apiClient
