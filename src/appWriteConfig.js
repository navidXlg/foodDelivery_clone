import { Client, Account, Teams } from "appwrite";

export const client = new Client();
export const account = new Account(client);
export const teams = new Teams(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('659a5d76d50c6526a035') // Your project ID
;


export const headerAuth = {
    'Host': 'HOSTNAME',
    'Content-Type': 'application/json',
    'X-Appwrite-Response-Format': '1.4.0',
    'X-Appwrite-Project': '659a5d76d50c6526a035',
    'X-Appwrite-Key': 'f47e1c95b812bab9bd3db56283c91e2ea287716b1f1a8621bceefd893757959c155be9d674e2f8bcf3c42677ee2d8e69decec3e24ed41252e6bd54a42d64507f5de3faa5851e7cd845444addcb04a81c690583d346013dc810c76335c6464e184430108ac0fb9dc76832fffbe0acde48d6828f8ad67ae49560197a7ea7a097bb'

};

export const accountAuth = {
    'Host': 'HOSTNAME',
    'Content-Type': 'application/json',
    'X-Appwrite-Response-Format': '1.4.',
    'X-Appwrite-Project': '659a5d76d50c6526a035'
   };

export const logInHeader = {    
    headers: {
    'Host': 'HOSTNAME',
    'Content-Type': 'application/json',
    'X-Appwrite-Response-Format': '1.4.0',
    'X-Appwrite-Project': '659a5d76d50c6526a035'
  }
};






