import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    name: string;
    icon: string;
    component: string;
    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({ name, icon, component, isFirst = false, isLast= false }: Props) => {

    const navigation = useNavigation();

  return (
    <Pressable
        onPress={ () => navigation.navigate( component as never ) }
    >
      <View 
        style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
            ...(isLast && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
        }} >
            <Icon name={ icon } size={ 25 } style={{ marginRight: 10 }} color={ colors.primary }  />
            <Text  style={{ color: colors.text }}>{ name }</Text>
            <Icon name="chevron-forward-outline" size={ 25 } style={{ marginLeft: 'auto', color: colors.primary  }}   />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})

export default MenuItem
