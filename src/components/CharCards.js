import { Card, Button, Icon, Image } from 'react-native-elements'
import { View, 
    Text,
    ScrollView,
    RefreshControl,
    SafeAreaView,
    StyleSheet,} from 'react-native'
import React,{Component } from 'react'
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardDetails from './CardsDetails'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


// const navigation = useNavigation();

class CharCard extends Component{
    // constructor(props) {
    //     super(props);
    // }

    render(){

        const { chars } = this.props.chars
        const {navigation} = this.props
        
            // console.log(this.props)
        return(
    <SafeAreaView >
        <ScrollView
            
            // refreshControl={
            // <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
        >
        <View>
        {
            chars.map((char) => {
            return (
                <Card
                key = {char.char_id}
                title={char.name}
                // image={char.img}
                >
                <Image
                    source={{ uri:char.img}}
                    style={{ width: 400, height: 500 }}
                />

                <Text style={{marginTop:5, marginBottom: 10, fontSize: 18}}>
                A.K.A - {char.nickname}
                </Text>
                <Button
                    icon={<Icon  color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW DETAILS' 
                    onPress = {() => { 
                        navigation.navigate("Details",{
                        itemId: char.char_id
                      });
                    }}
                />
                </Card>
            );
            })
        }
        </View>
        </ScrollView>
    </SafeAreaView>

        )

    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
});


function mapStateToProps(state) {
    return {
        chars: state.chars
    }
}

const CharCards =  function(props) {
    const navigation = useNavigation();
  
    return <CharCard {...props} navigation={navigation} />;
  }


export default connect(mapStateToProps,)(CharCards)

// export default CharCards