import {useState, useEffect} from 'react';

import { useParams } from "react-router-dom";
import axios from 'axios';
import Loading from "../../components/Loading"

function Detail () {
    const [char, setChar]= useState(null);
    const { char_id } = useParams();
    const [loading, setLoading] = useState(true);
    console.log(char_id)

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
        .then((res) => res.data)
        .then(data => setChar(data[0]))
        .finally(()=> setLoading(false));
    }, [char_id]);

    return <div>
        {char &&(
            <div>
                {loading && <Loading />}
                <h1>{char.name}</h1>
                <img src={char.img} alt="" style={{width: "50%"}}></img>
            </div>
        )}
        {
            char && <pre>{JSON.stringify(char, null, 2)}</pre>
        }
    </div>
}

export default Detail; 
