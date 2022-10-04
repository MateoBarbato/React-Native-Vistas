import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:'center',
        borderRadius:5,
        marginHorizontal:20,
        marginVertical:20,
        height:150,

    },
    contentContainer:{
        flex:1,
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:5,
        elevation:5,
        justifyContent:"center",
        alignItems:"center",
        padding:50

},
    title:{
        fontFamily:'Lato-Bold',
        fontSize:20
    },
})