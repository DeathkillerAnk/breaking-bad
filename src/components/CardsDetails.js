import React, {Component} from 'react';
import { Card, ListItem, Button, Icon, Image} from 'react-native-elements'
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { connect } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { HeaderBackButton } from '@react-navigation/stack';


// function Detail() {
//   const { itemId } = route.params;
//   // headerLeft: (props) => (
   
//   // ),
//   return (
    
//     <HeaderBackButton
      
//     onPress={() =>
//       navigation.navigate('Home')
//     }
//   />
//   );
// }

class CardDetails extends Component{
  render(){
  const { itemId } = this.props.route.params;
  const { chars } = this.props.chars
  // console.log(chars[itemId])

  return(
  <SafeAreaView >
    <ScrollView>
    <Card
      title={chars[itemId-1].name}
      // image={chars[itemId-1].img}
      
      >
      <Image
        source={{ uri:chars[itemId-1].img}}
        style={{ width: 400, height: 500 }}
      />

      <Text style={styles.titleText}>
        A.K.A - {chars[itemId-1].nickname}
      </Text>

      <Text style={styles.titleText}>
        D.O.B - {chars[itemId-1].birthday}
      </Text>

      <Text style={[styles.titleText]}>Occupation</Text>

      <View>{
      chars[itemId-1].occupation.map((occ,i) => {
        return(
          
              <Text key = {i} style={styles.baseText}>
             - {occ}
            </Text>
        )
      })
      }</View>

      <Text style={styles.titleText}>
        Portrayed - {chars[itemId-1].portrayed}
      </Text>

      <Text style={styles.titleText}>
        Status - {chars[itemId-1].status}
      </Text>

    </Card>
    </ScrollView>
  </SafeAreaView>
  )
  }
}

const styles = StyleSheet.create({
  baseText: {
    // fontFamily: "Cochin",
    fontSize: 18
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop:5
  },
  // lowMarg:{
  //   marginBottom: 5,
  // }
});

  
function mapStateToProps(state) {
  return {
      chars: state.chars
  }
}

export default connect(mapStateToProps,)(CardDetails)