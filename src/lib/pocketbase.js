import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_pocketbaseurl);
export default pb