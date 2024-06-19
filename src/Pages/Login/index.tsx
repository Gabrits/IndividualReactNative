import React, { useState } from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './style'
import { TextInputComponent } from '../../Components/TextInput';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

export function Login() {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [buttonClicked, setButtonClicked] = useState(false);
    const navigator = useNavigation();

    const handleEmail = (value:string ) => {
        setEmail(value)
    }

    const handlePassword = (value:string) => {
        setPassword(value)
    }

    const handleLogin = () => {
        navigator.navigate("StackHome", {name: "Home"});
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <View style={styles.container}>
            
            <Text style={styles.bemvindo1}>
                Boas-vindas de volta!
            </Text>

            <Text style={styles.bemvindo2}>
                Estamos muito animados em te ver novamente!
            </Text>

            <View style={styles.emps}>

                <Text style={styles.infoconta}>
                    Informações da conta
                </Text>

                <TextInputComponent
                placeholder='E-mail ou número de telefone'
                onChangeValue={handleEmail}
                />

                <TextInputComponent
                placeholder='Senha'
                onChangeValue={handlePassword}
                type={true}
                />

                <Text style={styles.ess}>
                    Esqueceu sua senha?
                </Text>

                <Text style={styles.ugs}>
                    Utilizar um gerenciador de senhas?
                </Text>
            </View>

            <ButtonComponent 
                    title="Entrar" 
                    handleOnChange={() => {
                        if (email && password && email.length > 0 && password.length > 0) {
                            handleLogin();
                        } else {
                            setButtonClicked(true);
                        }
                    }} 
                />

                {buttonClicked && (!email || !password || email.length === 0 || password.length === 0) && (
                    <>
                    <Text style={styles.cin}>Insira credenciais válidas!</Text>
                    </>
                )}

        </View>
    </TouchableWithoutFeedback>
  )
}