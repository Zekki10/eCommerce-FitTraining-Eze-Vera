import db from "./firebaseConfig"
import { collection, getDocs } from 'firebase/firestore/lite';

const getItems = async () => {
    const productsCollection = collection(db, "Products")
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return productList
}

export default getItems