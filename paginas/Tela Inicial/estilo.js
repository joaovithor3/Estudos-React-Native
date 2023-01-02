import {StyleSheet} from 'react-native';




const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#d3d3d3',
        justifyContent:'center',
        alignItems:'center',
    },
    container1:{
    width: 350,
    height: 625,
    backgroundColor:"#DCE3D8",
    borderColor:"B4F6FD", //"#D9F6FD",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    margin : 30,
    alignItems:'center',
    },
imagem:{
    width: 300,
    height: 350,
    alignSelf:'center',
    borderRadius:20,
    borderColor:'black',
    borderWidth: 2,
    marginTop:15,
    marginBottom: 15,
},
titulo:{
    textAlign:'center',
    fontSize: 20,
    color:'#D68D3A',

},
texto:{
    fontSize: 15,
    textAlign:'center',
    color:'#D68D3A',
    marginBottom: 15,
},

});


export default estilos