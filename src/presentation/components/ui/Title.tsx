import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/theme';

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
}

const Title = ( { text, safe, white }: Props ) => {

    const { top } = useSafeAreaInsets();

  return (
    <View>
      <Text  
        style={{ 
            ...globalStyles.title,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            color: white ? 'white' : colors.text
        }}
      >{ text }</Text>
    </View>
  )
}

export default Title
