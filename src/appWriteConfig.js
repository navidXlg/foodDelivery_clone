import { Client, Account, Teams, Databases } from "appwrite";

export const client = new Client();
export const account = new Account(client);
export const teams = new Teams(client);
export const databases = new Databases(client);
export const APPLICATION_ID = "659a5d76d50c6526a035";
export const SALESCENTER_ID = "659a6433047f926cb262";
export const ORIGINALUSER_ID = "659a642329b145e1ca44";
export const ADMINS_ID = "659a636255a550284c44";
export const DATABASE_ID = "659a6a22e9ce96f0193c";
export const SALESCENTER_COLLECTION = "659e4cec3ece584baab5";
export const LOACTION_COLLECTION = "65a23c3cbc9275e3beb3";

const superMarket = '65cfb3afc0748a2ac6e6';
const other = '65cfb0e7198da15b4037';
const fruit = '65cfac6c99a590584eeb';
const iceCream = '65cfa36b61a8b80d4900';
const nut = '65cf29ca5503ec46df9a';
const sweet = '65cf1fd6030b1d52045f';
const cafe = '65cf16a50a64dd540803';
const resturants = '65ce89cbec324aa9b923';


client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(APPLICATION_ID) // Your project ID
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

export {superMarket,other, fruit, iceCream, nut, sweet, cafe, resturants
 }










// const fs = require('fs');
// const { Client, Account, Teams, Databases, ID } = require('appwrite');



// const client = new Client();
// const account = new Account(client);
// const teams = new Teams(client);
// const databases = new Databases(client);
// const APPLICATION_ID = "659a5d76d50c6526a035";
// const SALESCENTER_ID = "659a6433047f926cb262";
// const ORIGINALUSER_ID = "659a642329b145e1ca44";
// const ADMINS_ID = "659a636255a550284c44";
// const DATABASE_ID = "659a6a22e9ce96f0193c";
// const SALESCENTER_COLLECTION = "659e4cec3ece584baab5";
// const LOACTION_COLLECTION = "65a23c3cbc9275e3beb3";
// client
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject("659a5d76d50c6526a035") // Your project ID
// ;


// const jsonData = fs.readFileSync('db.json', 'utf-8');
// const data = JSON.parse(jsonData);
// const {other} = data;
// addList(other);


// async function addList(productsData){
//     for(let i = 0; i <= productsData.length ; i++){
//         let productsDataItem = productsData[i]
//             try {
//                 const document = await databases.createDocument("659a6a22e9ce96f0193c", "65cfb0e7198da15b4037" ,ID.unique() , productsDataItem);
//                 console.log('Document created successfully:', document);
//             } catch (error) {
//                 console.error('Error creating document:', error);
//             }
//     }
// }







