import React, { useState } from 'react'
import { ImageStyle, StyleProp, View, Animated, ActivityIndicator } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {

    const {animatedOpacity, fadeIn} = useAnimation();
    const [isLoading, setisLoading] = useState(true)

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }} >

        {
            isLoading && (
                <ActivityIndicator
                    style={{ position: 'absolute' }} 
                    color= 'grey'
                    size={ 30 }
                />
            )
        }

      

      <Animated.Image
        source={{ uri}}
        onLoadEnd={ () => {
            fadeIn({  })
        } }
        style={[ style, { opacity: animatedOpacity } ]}
      />
    </View>
  )
}

export default FadeInImage
