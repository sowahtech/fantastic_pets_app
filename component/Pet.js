import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export default function Pet({image, title, type, year, location}) {
    return (
        <View style={styles.petContainer}>
            <Image 
                source={image} 
                style = {styles.image}
            />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.type}>{type}</Text>
                <Text style={styles.years}>{year}</Text>
                <View style={styles.location}>
                    <EvilIcons name="location" size={24} color="#D0CBD1" style={styles.loc_icon}/>
                    <Text style={styles.location_text} numberOfLines={1}>{location}</Text>
                </View>                
            </View>
        </View>

    )
}
 
const styles = StyleSheet.create({
 petContainer : {
     flexDirection: "row",
     marginHorizontal: 15,
     flex: 10,
     marginBottom: 15

 },

 image: {
     width: 180,
     height: 180,
     borderRadius: 10,
     flex: 5.7
 },
 details: {
     borderTopRightRadius: 10,
     borderBottomEndRadius: 10,
     marginVertical: 15,
     paddingHorizontal: 7,
     backgroundColor: "white",
     width: 150,
     height: 150,
     flex: 4.3
 },
 location: {
     flexDirection: "row",
     flex: 4.3,
     justifyContent: "center",
     alignItems: "center",
     marginBottom: 10
 },
 title: {
     marginHorizontal: 5,
     marginTop: 10,
     fontSize: 22,
     fontWeight: "bold",
     color: "#5C0D74"
 },
 
 type: {
    marginHorizontal: 5,
    marginVertical: 3,
    fontSize: 22,
    color: "#D0CBD1"
},

years: {
    marginHorizontal: 5,
    marginVertical: 2,
    fontSize: 22,
    color: "#D0CBD1"
},

location_text: {
    fontSize: 22,
    flex: 9,
    color: "#D0CBD1"
},

loc_icon: {
    flex:2,
    marginTop: 5,
    marginLeft: -2
}
})