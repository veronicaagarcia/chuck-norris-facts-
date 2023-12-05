import { useCallback, useEffect, useReducer, useState } from "react";
import { API } from "../API";
import { fetchReducer, initialState } from "../reducers/fetch";
import { ACTIONS } from "../actions/fetch";

export function useFetch (endpoint) {
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(false)
    // const [data, setData] = useState([])
    // console.log(data, 'v')

    const [state, dispatch] = useReducer(fetchReducer, initialState)

    const getData = useCallback( async () => {
        try{
            let { data } = await API.get(`${endpoint}`)
            if(!data.result){
                data = {total: '', result: [data]}
            } 
            console.log('es data', data)
            // setData([data])
            // setLoading(false)
            dispatch({type: ACTIONS.SET_DATA, payload: data})
        } catch(e) {
            console.error(e)
            // setError(true)
            dispatch({type: ACTIONS.SET_ERROR})
        }
    }, [endpoint])

    useEffect(() => {
        getData()

    }, [endpoint, getData])

    // return [data, loading, error]
    return state
}