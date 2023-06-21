import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGY4MzczMmNjYTFlODNmYThhNTZhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzEyNjk1MiwiZXhwIjoxNjg3Mzg2MTUyfQ.0XPS8ux8inlwSZPfnoYVFW1mfDU54sSIGRwvy1uYeHk"

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token: `Bearer ${TOKEN}`}
})
