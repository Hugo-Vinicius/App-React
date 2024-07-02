import React , {useState} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Local from '@react-native-community/geolocation'

export default function(){
   
    const [lat,SetLatitude]=useState(0)
    const[lon,SetLongitude]=useState(0)

    const obterLocal=()=>{

       Local.getCurrentPosition(
        (pos)=>{
            SetLatitude(pos.coords.latitude)
            SetLongitude(pos.coords.longitude)
        },
        (erro)=>{
            alert('Erro: ' + erro.message)
        },
        {
            enableHighAccuracy:false,timeout:120000,maximumAge:1000
        }
    )
    }
    
    return(
        <View>
            <Text>Museus Recife</Text>
            <TouchableHighlight onPress={obterLocal}>
                <Text>Localização Museus</Text>
            </TouchableHighlight>
            <Text>Latitude:{lat}</Text>
            <Text>Longitude{lon}</Text>
        </View>
    )
}