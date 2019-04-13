import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FormLabel, Button, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import api from '../data'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'congiap',
            conGiapData: api.dataConGiap(),
            cunghoangdaoData: api.dataCunghoangdao(),
            keySearch: '',
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerStyle: {
                color: 'tomato',
            },

        }
    }
    changeCheckBox(type) {
        this.setState({ type, keySearch: '' });
    }
    selectedItem = (value) => {
        this.setState({ keySearch: value });
    }
    search() {
        const screenNext = this.state.type === 'congiap' ? 'conGiap' : 'cungHoangDao';
        this.props.navigation.navigate(screenNext, { searchObj: this.state.keySearch });
    }
    render() {
        return (
            <View style={styles.contanir} >
                <View style={{ flex: 0.2, flexDirection: 'row', paddingTop: 50 }}>
                    <CheckBox
                        center
                        title='Con Giáp'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.type === 'congiap'}
                        style={{ flex: 0.5 }}
                        onPress={() => this.changeCheckBox('congiap')}
                    />
                    <CheckBox
                        center
                        title='Cung Hoàng Đạo'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.type === 'cunghoangdao'}
                        style={{ flex: 0.5 }}
                        onPress={() => this.changeCheckBox('cunghoangdao')}
                    />
                </View>

                <View>
                    <FormLabel labelStyle={styles.labelStyle}>
                        {this.state.type === 'congiap' ? 'Con Giáp' : 'Cung Hoàng Đạo'}
                    </FormLabel>
                    <Dropdown
                        data={this.state.type === 'congiap' ?
                            this.state.conGiapData : this.state.cunghoangdaoData}
                        onChangeText={this.selectedItem}
                        selectedItemColor='tomato'
                        containerStyle={{ marginLeft: '5%', marginRight: '5%' }}
                        value={this.state.keySearch}
                        fontSize={23}
                    />
                </View>

                <Button
                    large
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title={'Xem Tử Vi'}
                    onPress={() => this.search()}
                    style={{ paddingTop: 40 }}
                    buttonStyle={{ backgroundColor: 'green' }}
                />

            </View>
        );
    }
}

export default Home



const styles = StyleSheet.create({
    contanir: {
        flex: 1,
        fontSize: 25,
    },
    labelStyle: {
        color: 'green',
        fontSize: 27
    },
});


