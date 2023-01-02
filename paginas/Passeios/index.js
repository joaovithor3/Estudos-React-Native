import React from 'react';
import {Text,Image,View} from 'react-native';


import Passeio1 from '../../assets/assets/passeios/passeio01.png';
import Passeio2 from '../../assets/assets/passeios/passeio02.png';
import Passeio3 from '../../assets/assets/passeios/passeio03.png';
import estilos2 from './estilos';

export default function Restaurante() {
return(
<View style={estilos2.container}>
        <Text style={estilos2.titulo}>Passeios em Paraty</Text>
        <Text style={estilos2.texto1} >O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros.{'\n'}
 Veja dois exemplos:</Text>

    <View style={estilos2.container1}>
        <Text style={estilos2.texto}>Tirolesa</Text>
        <Image source={Passeio1} style={estilos2.imagem}/>
    </View>

    <View style={estilos2.container1}>
        <Text style={estilos2.texto}>Rafting</Text>
        <Image source={Passeio2} style={estilos2.imagem}/>

    </View>

    <View style={estilos2.container1}>
        <Text style={estilos2.texto} >Canoagem no mangue</Text>
        <Image source={Passeio3} style={estilos2.imagem}/>
    </View>
</View>
);
}
//finalizado