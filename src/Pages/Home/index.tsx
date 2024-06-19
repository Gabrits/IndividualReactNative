import React from 'react'
import { Button, Image, Text, TextInputComponent, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/Ionicons';
import fundo from '../../Assets/fundo.jpeg'
import { ButtonComponent } from '../../Components/ButtonComponent';


export function Home() {

  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
        
          <TouchableOpacity>
            <Icon name='chatbubble' size={25} style={styles.chats}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name='add' size={25} style={styles.mais}/>
          </TouchableOpacity>
        
              <Image source={fundo} style={styles.fundo}/>


        </View>

        <View style={styles.body}>
            
            <Text style={styles.tituloBody}>Mensagens</Text>

            <TouchableOpacity>
              <Icon name='search' size={17} style={styles.lupa}/>
            </TouchableOpacity>
              
              <TouchableOpacity style={styles.addamg}>
                <Icon name='people' size={14} style={styles.addicon}/>
                <Text style={styles.txtadd}>
                  Adicionar amigos
                </Text>
              </TouchableOpacity>

              <Text style={styles.mds} >MDs com superpoderes</Text>
              <Text style={styles.mdsDetalhe}>Convide seus amigos para jogar, ouvir música juntos e muito mais.</Text>
              

              <>
                <TouchableOpacity style={styles.addamgbt}>
                <Text style={styles.addamgbttxt}>Adicionar amigos</Text>
                </TouchableOpacity>
              </>
              
        </View>

    </View>
  )
}
