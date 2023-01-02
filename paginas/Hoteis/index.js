import React from 'react';
import {Text,Image,View} from 'react-native';


import Hotel1 from '../../assets/assets/hospedagens/hospedagem01.png';
import Hotel2 from '../../assets/assets/hospedagens/hospedagem02.png';
import Hotel3 from '../../assets/assets/hospedagens/hospedagem03.png';

import estilos3 from './estilos';

export default function Restaurante() {
return(
<View style={estilos3.container}>
    
    <Text style ={estilos3.titulo}>Pousadas e Hotéis em Paraty</Text>
    <Text style={estilos3.texto1}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00.{'\n'}Veja algumas pousadas abaixo.</Text>
        <View style={estilos3.box}>
            <Image source={Hotel1} style ={estilos3.imagem}/>
            <Text style={estilos3.texto}>Pousada Missanga</Text>
            <Text style={estilos3.textos}>Valor médio: R$ 350,00</Text>
            <Text style={estilos3.textos}>Localização: Próx. à Av. Roberto Silveira</Text>
        </View>
        <View  style={estilos3.box}>
            <Image source={Hotel2} style ={estilos3.imagem}/>
            <Text style={estilos3.texto}>Pousada Morro do Forte</Text>
            <Text style={estilos3.textos}>Valor médio: R$ 450,00</Text>
            <Text style={estilos3.textos}>Localização: Próximo à Praia - Pontal</Text>
        </View>
        <View style={estilos3.box}>
            <Image source={Hotel3} style ={estilos3.imagem}/>
            <Text style={estilos3.texto}>Pousada Porto Imperial</Text>
            <Text style={estilos3.textos}>Valor médio: R$ 550,00</Text>
            <Text style={estilos3.textos}>Localização: Centro Histórico</Text>
        </View>

</View>
);
}
//finalizado