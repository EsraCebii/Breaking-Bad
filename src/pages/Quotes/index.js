import {useEffect} from 'react';
import "./style.css";

import { useSelector, useDispatch } from 'react-redux';
import {fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from "../../redux/guotesSlice";
import Item from './item';

import Error from '../../components/Error';
import Loading from '../../components/Loading';


function Quotes () {
    const dispatch = useDispatch();
    const data = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);
    
    useEffect(() => {
        if(status== 'idle') {
        dispatch(fetchAllQuotes());
        }
    }, [dispatch, status]);

    if(error){
        return <Error message={error} />
    }
    return <div style={{padding: 10}}>
        <h1>Quotes</h1>
        {status === 'loading' && <Loading />}
        {
            status === 'succeeded' && data.map((item) => <Item key={item.quote_id} item={item} />)
        }
        {status==='succeeded' && <div className="quotes_info">{data.length} quotes</div>}
    </div>
}

export default Quotes; 
