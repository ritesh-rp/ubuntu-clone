import { Client, Account} from 'appwrite';
import config from './config';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(config.appwriteProjectId); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
