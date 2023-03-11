import React, { useEffect, useContext } from 'react'
import { fetchGetTodoData } from '../apis/index'
import { Store } from '../store/index'
import { GET_COMMENTS_DATA } from '../actions/index'
import Card from '../components/SecondCard'

const SecondPage = () => {
    const { globalState, setGlobalState } = useContext(Store)
    useEffect(() => {
        fetchGetTodoData().then(res => {
            setGlobalState({
                type: GET_COMMENTS_DATA,
                data: res.data
            })
        })
    }, [setGlobalState])
    console.log(globalState)

    return (
        <div>
            <h1>SecondPage</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    globalState.comments_data.map((comments, index) => {
                        return (
                            <Card comments={comments} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default SecondPage