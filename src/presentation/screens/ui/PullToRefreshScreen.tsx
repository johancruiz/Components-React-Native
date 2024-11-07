import React, { useState } from 'react'
import { RefreshControl, View } from 'react-native'
import Title from '../../components/ui/Title';
import CustomView from '../../components/ui/CustomView';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {

    const [ isRefreshing, setIsRefreshing ] = useState(true)

    const { top } = useSafeAreaInsets()

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000)
    }

  return (
    <ScrollView
        refreshControl={ 
        <RefreshControl 
            refreshing = { isRefreshing }
            progressViewOffset={ top } 
            onRefresh={ onRefresh }
        /> }
    >
        <CustomView margin >
            <Title text='Pull To Refresh' />
        </CustomView>
    </ScrollView>

  )
}

export default PullToRefreshScreen
