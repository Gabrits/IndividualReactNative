import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#141318',
        position:'relative'
    },

    navbar:{
        marginLeft: 0,
        height:1500,
        width:67
    },

    chats:{
        marginLeft:9,
        marginTop:30,
        color:'#fff',
        backgroundColor:'#5865F2',
        borderRadius: 16,
        width: 49,
        height: 49,
        textAlign: 'center',
        lineHeight: 49,
    },

    mais:{
        marginLeft:9,
        marginTop:15,
        color:'#23A559',
        backgroundColor:'#313338',
        borderRadius: 35,
        width: 49,
        height: 49,
        textAlign: 'center',
        lineHeight: 49,
    },

    // body:{
    //     position:'absolute',
    //     flex:1,
    //     width:200,
    //     height:200,
    //     backgroundColor:'#fff',
    //     zIndex:999

    // }
    body:{
        position: 'absolute', 
        top: '3.6%',
        left: '17%',
        backgroundColor: '#1C1D22',
        padding: 20,
        borderRadius: 25,
        zIndex: 1,
        width: 395,
        height: 1000
    },

    tituloBody:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        justifyContent:'flex-start',

    },

    lupa:{
        marginLeft:0,
        marginTop:23,
        color:'#fff',
        backgroundColor:'#35373C',
        borderRadius: 35,
        width: 39.3,
        height: 39.3,
        textAlign: 'center',
        lineHeight: 39.3,
    },

    addamg:{
        position: 'absolute',
        justifyContent: 'center',
        marginTop: 68,
        backgroundColor: '#35373C',
        paddingVertical: 10,
        paddingHorizontal: 82,
        borderRadius: 20,
        marginLeft:95
    },

    txtadd:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:13
    },

    addicon:{
        position:'absolute',
        paddingLeft:50,
        paddingTop:1,
        color:'#fff'
    },

    fundo:{
        zIndex:3,
        width:374,
        height:374,
        marginTop:90,
        marginLeft:78
    },

    mds:{
        marginLeft:78,
        marginTop:500,
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    mdsDetalhe:{
        color:'#585961',
        fontWeight:'bold',
        marginTop:8,
        marginLeft:80,
        width:200,
        fontSize:14,
    },

    addamgbt:{
        marginTop:18,
        width:340,
        height:40,
        borderRadius:20,
        backgroundColor:'#5865F2'
    },

    addamgbttxt:{
        paddingTop: 10,
        paddingLeft: 120,
        alignContent:'center',
        justifyContent:'center',
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})