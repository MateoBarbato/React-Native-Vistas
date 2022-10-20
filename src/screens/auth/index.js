import React ,{useState} from 'react'
import { View, Text,TouchableOpacity,Button,TextInput,KeyboardAvoidingView} from 'react-native'
import {styles} from './style'
import { colors } from '../../constants/themes'
import { useDispatch } from 'react-redux'
import { singUp } from '../../store/actions/auth-action'

const Auth = (navigation) => {
    const dispatch = useDispatch();

    const [isLogin,setIsLogin] = useState(true)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?';

    const onHandleSubmit= () => {
        dispatch(singUp(email,password));
    }

    
    return(
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='padding'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Write your email'
                    value={email}
                    placeholderTextColor={colors.gray}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText = {(text)=> setEmail(text)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Write your password'
                    value={password}
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText = {(text)=> setPassword(text)}
                />
                <Button
                    title={title}   
                    color={colors.primary}
                    onPress={onHandleSubmit}
                    disabled={!email || !password}
                />
                <TouchableOpacity onPress={()=>setIsLogin(!isLogin)}>
                    <Text style={styles.promtAction}>{message}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )

    
}

export default Auth;