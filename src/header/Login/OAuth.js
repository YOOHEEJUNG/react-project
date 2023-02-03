const REST_API_KEY = "80ea871c0f5a0fc2a82d69ddd8b45c12";
const REDIRECT_URI =  "http://localhost:3000/";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;