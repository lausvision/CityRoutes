import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';


export default class Activity extends React.Component {


    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.scrollConatainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('./img/exemple_activity.jpg')}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>name activity</Text>
                    </View>

                    <View>
                        <Text style={styles.subheaderText}>Come into a world of fresh fruits and vegetables, meats and cheeses, restaurants and a wide variety of specialty shops and services.</Text>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.moreinfoButton}
                            onPress={() =>
                                this.props.navigation.navigate('Activity')}>
                            <Text style={styles.activityButtonText}>MORE INFO</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>price:</Text>
                        <View style={styles.pricebuttonContainer}>
                        <TouchableOpacity style={styles.priceButton}>
                            <Text style={styles.priceButtonText}>15 €</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>

                    <View>
                        <Text style={styles.priceText}>location</Text>
                    </View>

                </ScrollView>



            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {

    },
    headerText: {

        fontSize: 37,
        paddingLeft: 20,
        paddingBottom: 10,
        fontWeight: '100'

    },
    subheaderText: {

        fontSize: 15,
        paddingLeft: 20,
        paddingBottom: 5,
        fontWeight: '100'

    },
    containerButton: {
        flex: 0,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 35,
    },
    moreinfoButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 40,
        backgroundColor: 'white',
        width: 95,
        height: 30,
        borderWidth: 2.5, 
        borderRadius: 4,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    discoverButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    activityButtonText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    imageContainer: {

    },
    image: {
        margin: 0,
        height: 250,
        width: 500,
        resizeMode: 'stretch',
    },
    scrollConatainer: {
        flex: 1,
    },
    priceContainer: {
        flex: 0,
        alignItems: 'flex-start',
        paddingLeft: 20,
        flexDirection: 'row',
    },
    pricebuttonContainer: {
        paddingLeft: 20,
    },
    priceButton: {
        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 40,
        backgroundColor: 'black',
        width: 95,
        height: 30,
        borderWidth: 2.5, 
        borderRadius: 13,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    priceButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
})