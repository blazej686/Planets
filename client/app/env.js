export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'blazej686.us.auth0.com'
export const audience = 'https://BlazeAPI.com'
export const clientId = 'JC8GU9ix7jNmaqyfspSnx3r2j4Ydgbl1'