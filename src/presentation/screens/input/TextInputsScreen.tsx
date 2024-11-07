import React, { useState } from 'react'
import { KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import Card from '../../components/ui/Card';

const TextInputsScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    })

  return (
    <KeyboardAvoidingView>
        <ScrollView>
        <CustomView style={ globalStyles.globalMargin } >
        < Title text='Text Input' safe /> 

        <Card>
            <TextInput 
                style={ globalStyles.input } 
                placeholder='Full Name'
                autoCapitalize={'words'}
                autoCorrect={false}
                onChangeText={ value => setForm({ ...form, name: value }) }
            />

            <TextInput 
                style={ globalStyles.input } 
                placeholder='Email'
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={ value => setForm({ ...form, email: value }) }
            />

            <TextInput 
                style={ globalStyles.input } 
                placeholder='Phone'
                keyboardType='phone-pad'
                onChangeText={ value => setForm({ ...form, phone: value }) }
            />
        </Card>

        <View style={{height: 10}} ></View>

        <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>

        </CustomView>
    </ScrollView>
    
    </KeyboardAvoidingView>
    
  )
}

export default TextInputsScreen
