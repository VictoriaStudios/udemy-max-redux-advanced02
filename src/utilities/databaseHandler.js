import { ref, set,child, get } from "firebase/database";
import { db } from "./firebase";

export function setCart(cart) {
  set(ref(db, 'cart/'), cart);
}

export function getCart () {
    return new Promise ((resolve, reject) => {
        const dbRef = ref(db);
        get(child(dbRef, 'cart')).then ((snapshot) => {
            if (snapshot.exists()) resolve (snapshot.val())
            else (reject ('No data found'))
        })
    })
}