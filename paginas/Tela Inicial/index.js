import React from 'react';
import {View,Text,Image,Button} from 'react-native';

import image from '../../assets/assets/01.png'
import estilos from './estilo';



export default function TelaInicial(props) {
return(
<View style={estilos.container}>
    <View style={estilos.container1}>
        
<Text style ={estilos.titulo}>Paraty</Text>
<Image style={estilos.imagem} source ={image}/>
<Text style={estilos.texto}>Saiba o que visitar em Paraty</Text>

<Button title ='Ver Restaurantes'
    onPress={() => props.navigation.navigate('Restaurantes')} color = '#BF6F3D'/>

        <Text>    </Text>

<Button title ='      Ver Passeios     '
 onPress={() => props.navigation.navigate('Passeios')} color = '#BF6F3D' />

        <Text>    </Text>
    
<Button title ='        Ver Hotéis        '
    onPress={() => props.navigation.navigate('Hoteis')} color = '#BF6F3D'/>

        <Text>    </Text> 
    </View>
</View>
);

}
//->quem não tem cão caça com gato <Text> ''Barra de espaço '' para dar o espaço entre os buttons, pq ainda não sei como faz isso sem gambiarra kkkk''</Text>