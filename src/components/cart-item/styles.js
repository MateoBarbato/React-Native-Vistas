import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        height:120,
        backgroundColor:colors.softprimary,
        borderWidth:1,
        borderRadius:5,
        borderColor:colors.primary,
        paddingVertical:10,
        paddingHorizontal:10,
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
        margin:10
    },
    headerContainer:{

    },
    title:{
        fontFamily:'Lato-Bold',
        fontSize:16,
        marginBottom:5,
        color:colors.text

    },
    contentContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"space-between",
        alignItems:'center'

    },
    content:{
        flex:1
    },
    quantity:{
        fontSize:14,
        marginBottom:5,
        fontFamily:'Lato-Regular'
    },
    price:{
        fontSize:14,
        marginBottom:5,
        fontFamily:'Lato-Bold'
    },

})