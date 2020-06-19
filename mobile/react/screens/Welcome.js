import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Item, Input, Button, Form} from 'native-base';
import images from './../hooks/images';
import Swiper from 'react-native-swiper';

class Welcome extends Component
{
    render(){
        return (
        <Container>

            <Swiper style={styles.wrapper} showsButtons={false} activeDotColor="#FFF" dotColor="#FFF5" loop={false}>

                <View style={styles.slide1}>
                    <Image source={images.welcomeLogo} style={styles.welcomeLogo}></Image>
                    <Image source={images.welcome01} style={styles.slideImage}></Image>
                    <View style={styles.text}>
                        <Text style={styles.title}>TRABAJOS</Text>
                        <Text style={styles.desc}>Encuentra todo tipo de pololitos adecuados a tus habilidades e interés.</Text>
                    </View>
                </View>

                <View style={styles.slide2}>
                    <Image source={images.welcomeLogo} style={styles.welcomeLogo}></Image>
                    <Image source={images.welcome02} style={styles.slideImage}></Image>
                    <View style={styles.text}>
                        <Text style={styles.title}>EMPLEA</Text>
                        <Text style={styles.desc}>Encuentra a la persona indicada para llevar a cabo tus trabajos.</Text>
                    </View>
                </View>

                <View style={styles.slide3}>
                    <Image source={images.welcomeLogo} style={styles.welcomeLogo}></Image>
                    <Image source={images.welcome03} style={styles.slideImage}></Image>
                    <View style={styles.text}>
                        <Text style={styles.title}>GANA</Text>
                        <Text style={styles.desc}>El dinero que obtengas será transferido a tu cuenta bancaria el día viernes de cada semana.</Text>
                    </View>
                </View>

                <View style={styles.slide4}>
                    <Image source={images.welcomeLogo} style={styles.welcomeLogo}></Image>
                    <Image source={images.welcome04} style={styles.slideImage}></Image>
                    <View style={styles.text}>
                        <Text style={styles.title}>REPUTACIÓN</Text>
                        <Text style={styles.desc}>Mientras mejor realices los trabajos aumentarán tus chances de volver ser adjudicado.</Text>
                    </View>
                </View>

            </Swiper>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={{color:"#FFF",fontSize:20}}>Saltar</Text>
                </TouchableOpacity>
            </View>
     
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    welcomeLogo:
    {
        flex:1,
        marginTop:20,
        resizeMode:"contain",
        width:200
    },
    slideImage:
    {
        flex:2,
        resizeMode:"contain",
        width:"100%"
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#257FED'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBB03B'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#39B54A'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#93278F'
    },
    text:
    {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:70
    },
    title: {
        color: '#fff',
        fontSize: 29,
        fontWeight: "400",
        marginBottom:10
    },
    desc: {
        color: '#fff',
        fontWeight:"normal",
        fontSize: 17,
        paddingLeft:20,
        paddingRight:20,
        textAlign:"center"
    },
    footer:{
        borderTopColor:"#FFF",
        borderTopWidth:0.5,
        height:60,
        bottom:0,
        width:'100%',
        position:"absolute",
        justifyContent:"center",
        alignItems:"flex-end",
        paddingRight:"14%"
    }
  })
export default Welcome