import React from 'react';
import {Text,Image,View} from 'react-native';


import Restaurante1 from '../../assets/assets/restaurantes/restaurante01.png';
import Restaurante2 from '../../assets/assets/restaurantes/restaurante02.png';
import Restaurante3 from '../../assets/assets/restaurantes/restaurante03.png';
import estilos1 from '../Restaurantes/estilo';



export default function Restaurante() {
return(
<View style={estilos1.container1}>

    <Text style={estilos1.titulo1}>Bares e Restaurantes</Text>
    <Text style={estilos1.texto1}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>

        <View style={estilos1.container2}>
            <Image style={estilos1.imagem1} source={Restaurante1}/>
            <Text style={estilos1.texto2}>Armazén Mar</Text>
            <Text style={{marginHorizontal: 5}}>Localização: Rod Rio-Santos</Text>
        </View>

        <View style={estilos1.container2}>
            <Image source={Restaurante2} style={estilos1.imagem1}/>
            <Text style={estilos1.texto2}>Bendita's Restaurante</Text>
            <Text style={{marginHorizontal:5}}>Localização: Centro Histórico</Text>
        </View>

        <View style={estilos1.container2}>
            <Image source={Restaurante3} style={estilos1.imagem1}/>
            <Text style={estilos1.texto2}>SEREIA DO MAR PIZZA-BAR</Text>
            <Text style={{marginHorizontal:5}}>Localização: Praia do Jabaquara</Text>
        </View>

</View>
);
}

//finalizado