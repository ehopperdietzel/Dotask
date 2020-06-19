import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Content, Text, Item, Input, Button, Form} from 'native-base';
import images from './../hooks/images';

class LoginView extends Component {

passInput = React.createRef();

render(){
  return(
    <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>

            <Image style={styles.logo} source={images.logo}/>
            <Text style={styles.textLogo}>pololitos</Text>

            
            <Item style={styles.input}>
            <Input 
                keyboardType='email-address'
                placeholder='Correo electrónico'
                placeholderTextColor = {"#DDD"}
                style={{color:"#FFF"}}
                returnKeyType='next'
                onSubmitEditing={() => { 
                this.passInput._root.focus(); 
                }}
                />
            </Item>

            <Item style={styles.input}>
            <Input 
            ref={input => passInput = input}
            placeholderTextColor = {"#DDD"}
            style={{color:"#FFF"}}
            secureTextEntry={true} 
            placeholder='Contraseña'
            returnKeyType='next'
            />
            </Item>
            
            
        
            <TouchableOpacity>
            <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
            </TouchableOpacity>
            
            <Button  bordered light style={styles.nextButton} onPress={()=>this.props.navigation.navigate("Welcome")}>
              <Text>Siguiente</Text>
            </Button>
        

            <View style={styles.noAccount}>

            <Text style={{color:'#FFF'}}>¿No tienes cuenta?</Text>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}> Regístrate</Text>
            </TouchableOpacity>

            </View>
        </Content>
        
    </Container>
    
    );
  }
}


const styles = StyleSheet.create({
  container: 
  {
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'#257FED',
    
  },
  content:
  {
    paddingTop:'25%',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
  },
  logo: 
  {
    resizeMode: 'contain',
    height:130
  },
  textLogo: 
  {
    color:'#FFFFFF',
    marginTop:20,
    fontStyle:'italic',
    marginBottom:20,
    textAlign:'center',
    fontWeight:'500',
    fontSize:26
  },
  forgotPassword: 
  {
    marginTop:20,
    marginBottom:20,
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
    color:'#FFF'
  },
  input:
  {
    color:'#FFFFFF',
    width:'75%'
  },
  noAccount:
  {
    marginTop:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'baseline'
  },
  nextButton:
  {
    justifyContent: "center",
    paddingLeft:20,
    paddingRight:20
  }
});

export default LoginView