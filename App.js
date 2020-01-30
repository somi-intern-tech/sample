import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './app/component/Login'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      username: '',
      password: ''

    }
  }
  render() {
    return (
      //       <View style={styles.container}>
      // {/* 
      //       <Image source={require('../Images/propelrr.jpg')}
      //         style={styles.image} /> */}

      //       <View style={styles.container1}>
      //         <View style={styles.input}>
      //           <TextInput
      //             name='username'
      //             // value={this.state.username}
      //             placeholder='Username'
      //             autoCapitalize='none'
      //             // onChangeText={this.handleUsernameChange}


      //           />
      //         </View>
      //         <View style={styles.input}>
      //           <TextInput
      //             name='password'
      //             // value={this.state.password}
      //             placeholder='Password'
      //             secureTextEntry
      //             // onChangeText={this.handlePasswordChange}
      //           />
      //         </View>

      //         <TouchableOpacity style={styles.button}
      //           onPress={() => {
      //             this.onLogin()
      //           }
      //           }>
      //           <Text style={{ fontWeight: 'bold', color: 'white' }}> LOGIN </Text>
      //         </TouchableOpacity>
      //       </View>
      //     </View>
      <Login />

    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen, navigationOptions: {
        headerShown: false
      }
      
    }
    

  },
  { initialRoute: 'Home' },

);

const AppContainer = createAppContainer(RootStack)

type Props = {};
export default class App extends Component<Props>{
  render() {
    return (
      <AppContainer />
    );
  }
}




const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ff9800',
    alignItems: 'center',
    justifyContent: 'center'

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ef6730',
    padding: 15,
    width: 300,
    marginTop: 10
  },

  background: {
    width: 500,
    height: 200,
    backgroundColor: 'skyblue'
  },

  image: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 200,
    height: 250,
    width: 250,
    resizeMode: 'stretch',
    marginBottom: 15
  },

  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'

  },
  container1: {
    marginTop: -5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowOffset: { width: 8, height: 8, },
    shadowColor: 'black',
    shadowOpacity: .3,
    padding: 25
  },
})




