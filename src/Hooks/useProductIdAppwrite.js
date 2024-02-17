import {superMarket,other, fruit, iceCream, nut, sweet, cafe, resturants} from ".././appWriteConfig";


export default function useProductIdApp({product}){

    let colllectionID ; 
    switch (product){
         case product === "superMarket":
            colllectionID = superMarket
           break;
           case product === "other":
            colllectionID = other
           break;
           case product === "fruit":
            colllectionID = fruit
           break;
           case product === "nut":
            colllectionID = nut
           break;
           case product === "iceCream":
            colllectionID = iceCream
           break;
           case product === "cafe":
            colllectionID = cafe
           break;
           case product === "resturants":
            colllectionID = resturants
           break;
           case product === "sweet":
            colllectionID = sweet
           break;
    };

    return colllectionID;
};

