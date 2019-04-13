import React from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Badge } from 'react-native-elements';
import api from '../data'


class CungHoangDao extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            data: []
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Tử Vi Cung Hoàng Đạo',
            headerLeft: (<Text style={{ color: '#00a4db', paddingLeft: 5 }}
                onPress={() => {
                    navigation.navigate('home');
                }}
            >Trở Lại</Text>),
        }

    }
    async  componentWillMount() {
        
        this.setState({ isloading: true });
        var cung = this.props.navigation.getParam('searchObj');
        await api.getCungHoangDao(cung).then(res => {
            if (res.data.messages) {
                this.setState({ data: res.data.messages[0], isloading: false });
            }
        },
            function (err) {
                this.setState({ isloading: false });
            }
        );
    }
    render() {
        return (
            <ScrollView style={styles.contanir} >
                {
                    !this.state.isloading &&
                    <View>
                        <Badge containerStyle={{ backgroundColor: 'green' }}>
                            <Text style={{ fontSize: 25 }}>{this.state.data.text}</Text>
                        </Badge>
                    </View>
                }
                {
                    this.state.isloading &&
                    <View style={[styles.containerLoading, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
            </ScrollView >

        );
    }
}

export default CungHoangDao



const styles = StyleSheet.create({
    contanir: {
        flex: 1,
        fontSize: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20
    },

    containerLoading: {
        justifyContent: 'center',
    },
    horizontal: {
        marginTop: '45%'
    }
});


