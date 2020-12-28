import React from 'react'
import {Text, View, Image, FlatList} from 'react-native'
import Pet from './component/Pet'
import image1 from './assets/pet_python.jpg'
import image2 from './assets/pet_porcupine.jpg'
import image3 from './assets/pet_lion.jpg'

export default function Pets() {
    const petData = [
        {image: image1, title: "sandra", type: 'python', year: 2000, location: 'bahamas'},
        {image: image2, title: "kotoko", type: 'porcupine', year: 1975, location: 'ghana'},
        {image: image3, title: "jugle king", type: 'lion', year: 1960, location: 'johannesburg'},
    ]
    return (
        <View>
            <FlatList 
                data = {petData}
                renderItem = {({item})=>{
                    return <Pet 
                                image = {item.image}
                                title = {item.title}
                                type ={item.type}
                                year = {item.year}
                                location= {item.location}
                            />
                }}
                keyExtractor={(item)=>item.title}
            />
        </View>
    )
}
