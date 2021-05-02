import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//Web app's Firebase configuration
const config = {
    apiKey: "AIzaSyB6_gnDybSr6073w6WIdB9NMBEkwkJl7EA",
    authDomain: "food-delivery-61bda.firebaseapp.com",
    projectId: "food-delivery-61bda",
    storageBucket: "food-delivery-61bda.appspot.com",
    messagingSenderId: "661362295747",
    appId: "1:661362295747:web:2b6ae05c925983da913376",
    measurementId: "G-X4ETPHFHQ4"
};

export const createUserProfileDocument=async (userAuth,additionalData)=> {
	if(!userAuth) {
		return;
	}
	const userRef=firestore.doc(`users/${userAuth.uid}`);
	const snapShot=await userRef.get();
	if(!snapShot.exists) {
		const {displayName,email}=userAuth;
		const createdAt=new Date();
		const cartItems=[];
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				cartItems,
				...additionalData
			})
		} catch (error) {
			console.log('Error Creating User',error.message)
		}
	}
	return userRef;
}


export const addCollectionAndDocuments= async (collectionKey,documentsToAdd)=> {
	const collectionRef=firestore.collection(collectionKey);
	console.log(collectionRef);
	const batch = firestore.batch();

	documentsToAdd.forEach(doc=> {
		const newDocRef=collectionRef.doc() //will give a new document reference at the collection and randomly generate an ID.
		console.log(newDocRef)
		batch.set(newDocRef, doc)
	});

	return await batch.commit(); //will fireoff the batch reuest (returns a promise) (will resolve null value if commit succeeds)
}

export const AddUserCartItems=async(userId,itemToAdd)=> {
	const userRef=firestore.doc(`users/${userId}`);
	const snapShot=await userRef.get();
	console.log('snapshot',snapShot.data())
	
	if(snapShot.exists) {
		const {createdAt,displayName,email}=snapShot.data()
		let Usercart=snapShot.data().cartItems
		const existingCartItem=Usercart.find(
			cartItem=> cartItem.id===itemToAdd.id
			);
		if(existingCartItem) {
			Usercart= Usercart.map(cartItem=> 
				cartItem.id===itemToAdd.id 
				? {...cartItem, quantity: cartItem.quantity + 1}
				:cartItem
			)
		}
		else {
			Usercart.push(
				{...itemToAdd,
					quantity:1
				}
			) 
		}


		try {
			await userRef.set({
				createdAt,displayName,email,
				cartItems:Usercart
			})
		} catch (error) {
			console.log('Error Creating User',error.message)
		}
	}
	console.log(userRef);
	console.log('snapshot',snapShot.data())
	console.log(itemToAdd);
}

export const RemoveUserCartItems=async(userId,itemToRemove,clearItem)=> {
	const userRef=firestore.doc(`users/${userId}`);
	const snapShot=await userRef.get();
	console.log('snapshot',snapShot)
	
	if(snapShot.exists) {

	const {createdAt,displayName,email}=snapShot.data()
	let Usercart=snapShot.data().cartItems
	const existingCartItem=Usercart.find(
		cartItem=> cartItem.id===itemToRemove.id
		);
	if (clearItem) {
		Usercart=Usercart.filter(cartItem=>cartItem.id!==itemToRemove.id)
	}
	else if(existingCartItem.quantity>1) {
		Usercart= Usercart.map(cartItem=> 
			cartItem.id===itemToRemove.id 
			? {...cartItem, quantity: cartItem.quantity - 1}
			:cartItem
		)
	}
	else {
		Usercart=Usercart.filter(cartItem=>cartItem.id!==itemToRemove.id)
	}

		try {
			await userRef.set({
				createdAt,displayName,email,
				cartItems:Usercart
			})
		} catch (error) {
			console.log('Error Creating User',error.message)
		}
	}
	
	console.log(userRef);
	console.log(itemToRemove);

}

export const ClearCartAfterCheckout=async(userId)=> {
	const userRef=firestore.doc(`users/${userId}`);
	const snapShot=await userRef.get();
	console.log('snapshot',snapShot)
	if(snapShot.exists) {
		const {createdAt,displayName,email}=snapShot.data()
		let Usercart=snapShot.data().cartItems

		try {
			await userRef.set({
				createdAt,displayName,email,
				cartItems:[]
			})
		} catch (error) {
			console.log('Error Creating User',error.message)
		}
	}
	
}


export const convertCollectionsSnapshotToMap=(collections)=> {
	const transformedCollection=collections.docs.map(doc=> {
		const {title,items}=doc.data();
		const words=title.split(' ')
		const routeName=words[0].toLowerCase()

		return {
			routeName:encodeURI(routeName),
			id:doc.id,
			title,
			items
		}
	})
	console.log(transformedCollection);
	 return transformedCollection.reduce((accumulator,collection)=> {
		accumulator[collection.routeName]=collection;
		return accumulator
	},	{});
} 

// Initialize Firebase
 firebase.initializeApp(config);

 export const auth=firebase.auth();
 export const firestore=firebase.firestore();

 //Setting up Google Auth utility

 const provider=new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
 export const signInWithGoogle=()=> auth.signInWithPopup(provider);

 export default firebase;


