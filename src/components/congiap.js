import React from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Badge } from 'react-native-elements';
import api from '../data'


class ConGiap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            data: [],
            messages: '',
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Tử Vi Con Giáp',
            headerLeft: (<Text style={{ color: '#00a4db', paddingLeft: 5 }}
                onPress={() => {
                    navigation.navigate('home');
                }}
            >Trở Lại</Text>),
        }

    }
    async  componentWillMount() {

        this.setState({ isloading: true });
        var congiap = this.props.navigation.getParam('searchObj');

        await api.getConGiap(congiap).then(res => {
            if (!res.messages) {
                this.setState({ data: res.set_attributes, messages: '' });
            }
            else {
                this.setState({ messages: res.messages[0].text });
            }
            this.setState({ isloading: false });
        },
            function (err) {
                this.setState({ isloading: false, messages: '❌Bạn đã nhập sai con giáp , vui lòng nhập chính xác để sử dụng' });
            }
        );

    }

    render() {
        return (

            <ScrollView style={styles.contanir} >
                {
                    !this.state.isloading && this.state.messages === '' &&
                    < View >
                        <Badge containerStyle={{ backgroundColor: 'green' }}>
                            <Text style={{ fontSize: 30 }}>{this.state.data.tvcongiap}</Text>
                        </Badge>
                        <Badge containerStyle={{ backgroundColor: 'gray' }}>
                            <Text style={{ fontSize: 20 }}>{this.state.data.congviec}</Text>
                        </Badge>
                        <Badge containerStyle={{ backgroundColor: '#f37f7a' }}>
                            <Text style={{ fontSize: 20 }}>{this.state.data.taivan}</Text>
                        </Badge>
                        <Badge containerStyle={{ backgroundColor: 'violet' }}>
                            <Text style={{ fontSize: 20 }}>{this.state.data.tinhcam}</Text>
                        </Badge>
                        <Badge containerStyle={{ backgroundColor: '#d7ed1e' }}>
                            <Text style={{ fontSize: 20 }}>{this.state.data.cantrong}</Text>
                        </Badge>
                    </View>
                }
                {
                    !this.state.isloading && this.state.messages !== '' &&
                    < View >
                        <Badge containerStyle={{ backgroundColor: 'green' }}>
                            <Text style={{ fontSize: 25 }}>{this.state.messages}</Text>
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

export default ConGiap



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


