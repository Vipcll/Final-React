import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../componentes/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import {db} from '../utils/firebaseConfig';

const ItemListContainer=()=>{

const [ProdList, setProdList] = useState([]);
const {id} = useParams();


useEffect(()=>{
    const firestoreFetch = async() => {
        let q;
        if(id)
        {
            q = query(collection(db,"GetProducts"), where('category','==',id))
        }else
        {
            q = query(collection(db,"GetProducts"))
        }
        

        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
        }))
        return dataFromFirestore

    } 
    firestoreFetch()
        
        .then((response)=> setProdList(response))
        .catch(()=>console.error('error'))
        .finally()
},[ProdList]);


return(
<>
<div className='container-card'>
<ItemList products={ProdList}/>
</div>
</>
)
;   
}


export default ItemListContainer