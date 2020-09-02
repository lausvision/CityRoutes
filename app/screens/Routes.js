import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


export default class Routes extends React.Component {


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Time Schedule</Text>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.activityButton}
                        onPress={() =>
                            this.props.navigation.navigate('Activity')}>
                        <Text style={styles.activityButtonText}>ACTIVITY 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('./img/rightArrow.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.activityButton}>
                        <Text style={styles.activityButtonText}>ACTIVITY 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('./img/leftArrow.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.activityButton}>
                        <Text style={styles.activityButtonText}>ACTIVITY 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('./img/rightArrow.png')}
                            style={styles.ImageIconStyle}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.activityButton}>
                        <Text style={styles.activityButtonText}>ACTIVITY 4</Text>
                    </TouchableOpacity>
                </View>




                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.discoverButton}
                        onPress={() =>
                            this.props.navigation.navigate('Routes')}>
                        <Text style={styles.discoverButtonText}>SAVE THE ROUTE</Text>
                    </TouchableOpacity>
                </View>

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

        fontSize: 22,
        padding: 20,

    },
    containerButton: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    discoverButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#79A9E2',
        width: 230,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    activityButton: {

        flex: 0,
        justifyContent: 'flex-end',
        marginBottom: 2,
        backgroundColor: '#79A9E2',
        width: 260,
        height: 35,
        borderRadius: 6,
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
        fontSize: 20,
    },
    ImageIconStyle: {
        margin: 5,
        height: 50,
        width: 50,
        resizeMode: 'stretch',
      },

})