import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Content} from 'native-base';
import images from './../hooks/images';

/*

    Has lo tuyo PDI ;)

*/
class RegisterView extends Component {

  constructor(props)
  {
    super(props);
  }


render(){
  return(
    <Container style={styles.container}>
      <Content>

      </Content>
    </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: 
  {
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'#257FED'
  }
});

export default RegisterView