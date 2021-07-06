import React from 'react'
import useSWR from 'swr'
import Spinner from '@src/components/Spinner'
import useDealsStore from '@src/store/deals'
import Layout from '@src/hoc/Layout'
import Router from './Router'

function App() {
    const setDealsData = useDealsStore(({ setDealsData }) => setDealsData)

    const { data, error } = useSWR('https://api.npoint.io/c398eb7c8723bfe6ecf1')

    if (!error && !data) {
        return <Spinner />
    }

    if (error || !data) {
        return <div>Error!</div>
    }

    if (data) {
        setDealsData(data)
    }

    return (
        <Layout>
            <Router />
        </Layout>
    )
}

export default App
