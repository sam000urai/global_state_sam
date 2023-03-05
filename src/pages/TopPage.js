import React, { useEffect, useContext } from 'react'
import { fetchGetData } from '../apis/index'
import { Store } from '../store/index'
import { GET_DATA } from '../actions/index'
import Card from '../components/Card'

const TopPage = () => {
    const { globalState, setGlobalState } = useContext(Store)
    useEffect(() => {
        fetchGetData().then(res => {
            setGlobalState({
                type: GET_DATA,
                data: res.data.slice(0, 5)
            })
        })
    }, [])
    console.log(globalState)

    return (
        <div>
            <h1>TopPage</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    globalState.user_data.map((user, index) => {
                        if (index < 5) {
                            return (
                                <Card user={user} key={index} />
                            )
                        } else {
                            return null // 条件に合わない場合は何も表示しない
                        }
                    })
                }
            </div>
        </div>
    )
}


export default TopPage