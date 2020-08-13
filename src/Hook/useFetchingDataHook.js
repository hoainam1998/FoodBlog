import {useEffect,useState} from 'react';
import axios from 'axios';

function FetchingData(){

    const[post,setPost]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get('../postData.json')
        .then(res=>{
            setPost(res.data)
            setLoading(false)
        })
        .catch(err=>{console.log(err)})
    },[])

    return [loading,post];
}

export default FetchingData;