
import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const baseURL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5000';

const socket = io(baseURL, {
    withCredentials: true,
    path: '/api/socket.io',
});

export default socket;