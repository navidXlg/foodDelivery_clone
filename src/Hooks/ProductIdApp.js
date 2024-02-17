 import {superMarket,other, fruit, iceCream, nut, sweet, cafe, resturants} from ".././appWriteConfig";
 
 
 
 
 export function productId (product){
    let colllectionID ; 
    switch (product){
         case "superMarket":
            colllectionID = superMarket
           break;
           case "other":
            colllectionID = other
           break;
           case "fruit":
            colllectionID = fruit
           break;
           case "nut":
            colllectionID = nut
           break;
           case "iceCream":
            colllectionID = iceCream
           break;
           case "cafe":
            colllectionID = cafe
           break;
           case "resturants":
            colllectionID = resturants
           break;
           case "sweet":
            colllectionID = sweet
           break;
    };

    return colllectionID;
}