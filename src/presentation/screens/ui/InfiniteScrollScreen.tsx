import { useState } from "react"
import { ActivityIndicator, FlatList, View } from "react-native"
import Title from "../../components/ui/Title"
import { colors } from "../../../config/theme/theme"
import FadeInImage from "./FadeInImage"


const InfiniteScrollScreen = () => {

    const [number, setNumber] = useState([0,1,2,3,4,5])

    const loadMore = () => {
        const newArray = Array.from({length: 5}, (_, i) => number.length + i);
    
        setTimeout(() => {
          setNumber([...number, ...newArray]);
        }, 3000);
      };
    

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={number}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  )
}

interface ListItemProps {
    number: number;
  }
  
  const ListItem = ({number}: ListItemProps) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${number}/500/400`}
        style={{
          height: 400,
          width: '100%',
        }}
      />
      // <Image
      //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      // style={{
      //   height: 400,
      //   width: '100%'
      // }}
  
      // />
    );
  };

export default InfiniteScrollScreen
