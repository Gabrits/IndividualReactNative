import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    tabItem: {
        marginTop:13,
        flexDirection: 'column', // Alinha os itens verticalmente
        justifyContent: 'center', // Centraliza os itens verticalmente
        alignItems: 'center', // Centraliza os itens horizontalmente
      },
      tabText: {
        fontSize: 13,
        marginTop: 2, // Ajuste opcional para espaçamento entre o ícone e o texto
        fontWeight: 'bold'
    },

})