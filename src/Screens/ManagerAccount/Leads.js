import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Modal,
    TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const interestedBedroomTypesData = [
    { label: 'Select', value: '0' },
]

const interestedApartmentData = [
    { label: 'Select', value: '0' },
]

const statusData = [
    { label: 'Select', value: '0' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Closed', value: 'Closed' },
    { label: 'Cancelled', value: 'Cancelled' },
    { label: 'Follow Up', value: 'Follow Up' },
]

const detailPageStatusData = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Closed', value: 'Closed' },
    { label: 'Cancelled', value: 'Cancelled' },
    { label: 'Follow Up', value: 'Follow Up' },
]

const LeadesData = [
    {
        prospects: 'sruthi',
        apartment: 'N/A',
        bedroomType: 'N/A',
        propertyName: 'Riverside-Villa',
        // Status: '',
        createdOn: '2023-01-23',
    },
];

const Leads = props => {
    const [visible, setVisible] = useState(false);
    const [startDate, setStartDate] = useState(false);
    const [startDateSelected, setStartDateSelected] = useState(new Date());
    const [endDateSelected, setEndDateSelected] = useState(new Date());
    const [endDate, setEndDate] = useState(false);
    const [detailModal, setDetailModal] = useState(false);
    const [leadsFilter, setApplicationFilter] = useState({
        name: '', phone: '', email: '', propertyName: '', interestedBedroomTypes: '', interestedApartment: '', status: ''
    })
    const [status, setStatus] = useState('')

    const onStartDateClick = () => {
        setStartDate(true);
    };

    const onStartDateSelected = (event, value) => {
        setStartDateSelected(value);
        setStartDate(false);
    };
    const onEndDateSelected = (event, value) => {
        setEndDateSelected(value);
        setEndDate(false);
    };

    const onEndDateClick = () => {
        setEndDate(true);
    };

    const handleViewDetails = () => {
        setDetailModal(true);
        // props.navigation.navigate('propertyDetails');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar translucent backgroundColor="transparent" />
            <ScrollView contentContainerStyle={styles.outerContainer}>
                <View style={styles.mainBoxOuter}>
                    <View style={styles.fixInfoDiv}>
                        <View
                            style={[
                                styles.mt10,
                                {
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: '6%',
                                },
                            ]}>
                            <Text style={[styles.mainTitle, styles.txtStyle]}>
                                Leads
                            </Text>
                            <TouchableOpacity
                                style={styles.filterBtnContainer}
                                onPress={() => setVisible(true)}>
                                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                                    Filters
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={[
                                styles.mt10,
                                {
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: '4%',
                                    flexWrap: 'wrap'
                                },
                            ]}>
                            <Text style={[styles.mainTitle, styles.greyText, { marginRight: 5 }]}>Total(1)</Text>
                            <Text style={[styles.mainTitle, styles.greyText]}>Pending(1)</Text>
                            <Text style={[styles.mainTitle, styles.greyText]}>Closed(0)</Text>
                            <Text style={[styles.mainTitle, styles.greyText]}>Cancelled(0)</Text>
                            <Text style={[styles.mainTitle, styles.greyText]}>Follow Up(0)</Text>
                        </View>
                        <View style={[styles.prpertyList]}>
                            <FlatList
                                data={LeadesData}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity onPress={handleViewDetails}
                                            key={index}
                                            style={styles.proprtyCardItem}
                                            backgroundColor={'#f4f7ff87'}>
                                            <View style={styles.proprtyCardCol}>
                                                <View style={styles.proprtyCardRow}>
                                                    <View style={[styles.proprtyCardRight]}>
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-between',
                                                                borderBottomWidth: 1,
                                                                alignItems: 'center',
                                                                borderColor: '#c3c9cc',
                                                            }}>
                                                            <Text
                                                                style={[
                                                                    styles.mediumTitle,
                                                                    styles.pt8,
                                                                    styles.textBlue,
                                                                    { fontSize: 15 },
                                                                ]}>
                                                                # {index + 1}
                                                            </Text>
                                                        </View>
                                                        <Text
                                                            style={[
                                                                styles.mediumTitle,
                                                                styles.pt8,
                                                                styles.textBlue,
                                                            ]}>
                                                            Prospects
                                                        </Text>
                                                        <Text style={[styles.py7, { color: '#707070' }]}>
                                                            {item.prospects}
                                                        </Text>
                                                        <Text
                                                            style={[
                                                                styles.mediumTitle,
                                                                styles.pt8,
                                                                styles.textBlue,
                                                            ]}>
                                                            Apartment
                                                        </Text>
                                                        <Text style={[styles.py7, { color: '#707070' }]}>
                                                            {item.apartment}
                                                        </Text>
                                                        <Text
                                                            style={[
                                                                styles.mediumTitle,
                                                                styles.pt8,
                                                                styles.textBlue,
                                                            ]}>
                                                            Property Name
                                                        </Text>
                                                        <Text style={[styles.py7, { color: '#707070' }]}>
                                                            {item.propertyName}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(!visible)}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#00000080',
                    }}>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#ffffff',
                        }}>
                        <View
                            style={{
                                backgroundColor: '#0d568f',
                                padding: '5%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: '#ffffff',
                                    fontFamily: 'Montserrat-Bold',
                                }}>
                                Filters
                            </Text>
                            <View>
                                <TouchableOpacity onPress={() => setVisible(!visible)}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            color: '#ffffff',
                                            fontFamily: 'Montserrat-Bold',
                                        }}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView>
                            <View style={{ marginTop: 15, marginHorizontal: '4%' }}>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>Name</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <TextInput
                                            style={styles.formControlNew}
                                            value={leadsFilter.name}
                                            onChangeText={val => setApplicationFilter({ ...leadsFilter, name: val })}
                                            placeholder="Enter Application Name"
                                            placeholderTextColor="#707070"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>Phone</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <TextInput
                                            style={styles.formControlNew}
                                            value={leadsFilter.phone}
                                            onChangeText={val => setApplicationFilter({ ...leadsFilter, phone: val })}
                                            placeholder="Enter Application Name"
                                            placeholderTextColor="#707070"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>Email</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <TextInput
                                            style={styles.formControlNew}
                                            value={leadsFilter.email}
                                            onChangeText={val => setApplicationFilter({ ...leadsFilter, email: val })}
                                            placeholder="Enter Application Name"
                                            placeholderTextColor="#707070"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>Property Name</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <TextInput
                                            style={styles.formControlNew}
                                            value={leadsFilter.propertyName}
                                            onChangeText={val => setApplicationFilter({ ...leadsFilter, propertyName: val })}
                                            placeholder="Enter Application Name"
                                            placeholderTextColor="#707070"
                                        />
                                    </View>
                                </View>

                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>Interested Bedroom Types</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <Dropdown
                                            style={[styles.dropdown]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            placeholder="Select"
                                            data={interestedBedroomTypesData}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            value={leadsFilter.interestedBedroomTypes}
                                            onChange={item => {
                                                setApplicationFilter({ ...leadsFilter, interestedBedroomTypes: item.value });
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>Interested Apartment</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <Dropdown
                                            style={[styles.dropdown]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            placeholder="Select"
                                            data={interestedApartmentData}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            value={leadsFilter.interestedApartment}
                                            onChange={item => {
                                                setApplicationFilter({ ...leadsFilter, interestedApartment: item.value });
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>Status</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <Dropdown
                                            style={[styles.dropdown]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            iconStyle={styles.iconStyle}
                                            placeholder="Select"
                                            data={statusData}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            value={leadsFilter.status}
                                            onChange={item => {
                                                setApplicationFilter({ ...leadsFilter, status: item.value });
                                            }}
                                        />
                                    </View>
                                </View>

                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>From</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <TouchableOpacity
                                            onPress={onStartDateClick}
                                            style={styles.formControlNew}>
                                            {!startDateSelected ? (
                                                <Text
                                                    style={{
                                                        color: '#707070',
                                                        paddingTop: 12,
                                                        fontSize: 15,
                                                    }}>
                                                    mm/dd/yyyy
                                                </Text>
                                            ) : (
                                                <Text
                                                    style={{
                                                        color: '#707070',
                                                        paddingTop: 12,
                                                        fontSize: 15,
                                                    }}>
                                                    {startDateSelected.toDateString('en-US')}
                                                </Text>
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                    {startDate && (
                                        <DateTimePicker
                                            value={startDateSelected}
                                            mode={'date'}
                                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                            onChange={onStartDateSelected}
                                        />
                                    )}
                                </View>
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={styles.filtertxtStyle}>To</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <TouchableOpacity
                                            onPress={onEndDateClick}
                                            style={styles.formControlNew}>
                                            {!endDateSelected ? (
                                                <Text
                                                    style={{
                                                        color: '#707070',
                                                        paddingTop: 12,
                                                        fontSize: 15,
                                                    }}>
                                                    mm/dd/yyyy
                                                </Text>
                                            ) : (
                                                <Text
                                                    style={{
                                                        color: '#707070',
                                                        paddingTop: 12,
                                                        fontSize: 15,
                                                    }}>
                                                    {endDateSelected.toDateString('en-US')}
                                                </Text>
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                    {endDate && (
                                        <DateTimePicker
                                            value={endDateSelected}
                                            mode={'date'}
                                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                            onChange={onEndDateSelected}
                                        />
                                    )}
                                </View>
                            </View>
                        </ScrollView>
                        <View
                            style={[
                                styles.mt10,
                                {
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    marginTop: '10%',
                                    marginHorizontal: '4%',
                                },
                            ]}>
                            <TouchableOpacity
                                style={[styles.filterBtnContainer, { marginRight: 10 }]}>
                                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                                    Search
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.filterBtnContainer]}>
                                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                                    Clear
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={detailModal}
                onRequestClose={() => setDetailModal(!detailModal)}>
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    {/* <StatusBar translucent backgroundColor="transparent" /> */}
                    <View>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#0e558d', '#084677']}
                            style={styles.mainHeader}>
                            <View style={styles.backMenuDiv}>
                                <TouchableOpacity style={styles.backBtnDiv} onPress={() => { setDetailModal(false) }}>
                                    <Ionicons name={'chevron-back-sharp'} color={'#fff'} size={30} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.headerTitle}>Leades Details</Text>
                        </LinearGradient>
                    </View>
                    <ScrollView contentContainerStyle={styles.outerContainer}>
                        <View style={styles.mainBoxOuter}>
                            <View style={styles.fixInfoDiv}>
                                {/* <View style={{ marginTop: '10%' }}> */}

                                <View
                                    // key={index}
                                    style={styles.proprtyCardItem}
                                    backgroundColor={'#f4f7ff87'}>
                                    <View style={styles.proprtyCardCol}>
                                        <View style={styles.proprtyCardRow}>
                                            <View style={[styles.proprtyCardRight]}>
                                                <Text
                                                    style={[
                                                        styles.mediumTitle,
                                                        styles.pt8,
                                                        styles.textBlue,
                                                    ]}>
                                                    Prospects
                                                </Text>
                                                <Text style={[styles.py7, { color: '#707070' }]}>
                                                    Sruthi
                                                </Text>
                                                <Text style={{ color: '#707070', fontSize: 11.5, paddingVertical: 3 }}>
                                                    gundlapallisruthi@gmail.com
                                                </Text>
                                                <Text style={{ color: '#707070', fontSize: 11.5, paddingVertical: 3 }}>
                                                    918897851030
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.mediumTitle,
                                                        styles.pt8,
                                                        styles.textBlue,
                                                    ]}>
                                                    Apartment
                                                </Text>
                                                <Text style={[styles.py7, { color: '#707070' }]}>
                                                    N/A
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.mediumTitle,
                                                        styles.pt8,
                                                        styles.textBlue,
                                                    ]}>
                                                    Bedroom Type
                                                </Text>
                                                <Text style={[styles.py7, { color: '#707070' }]}>
                                                    N/A
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.mediumTitle,
                                                        styles.pt8,
                                                        styles.textBlue,
                                                    ]}>
                                                    Property Name
                                                </Text>
                                                <Text style={[styles.py7, { color: '#707070' }]}>
                                                    Riverside-Villa
                                                </Text>
                                                <Text
                                                    style={[
                                                        styles.mediumTitle,
                                                        styles.pt8,
                                                        styles.textBlue,
                                                    ]}>
                                                    Status
                                                </Text>
                                                <View style={{ marginTop: '5%' }}>
                                                    <Dropdown
                                                        style={[styles.statusDropDown]}
                                                        placeholderStyle={{ fontSize: 14 }}
                                                        selectedTextStyle={{ fontSize: 14 }}
                                                        placeholder="Select"
                                                        data={detailPageStatusData}
                                                        maxHeight={300}
                                                        labelField="label"
                                                        valueField="value"
                                                        value={status}
                                                        onChange={item => {
                                                            setStatus(item.value);
                                                        }}
                                                    />
                                                </View>
                                                <Text
                                                    style={[
                                                        styles.mediumTitle,
                                                        styles.pt8,
                                                        styles.textBlue,
                                                    ]}>
                                                    Created
                                                </Text>
                                                <Text style={[styles.py7, { color: '#707070' }]}>
                                                    2023-01-23
                                                </Text>

                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* </View> */}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

export default Leads;

const styles = StyleSheet.create({
    txtStyle: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
    },
    formControlNew: {
        fontSize: 14,
        color: '#434450',
        height: 50,
        borderWidth: 1,
        borderColor: '#b2b2b2',
        paddingBottom: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat-Regular',
        minWidth: '100%',
    },

    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    statusDropDown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    filtertxtStyle: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
    },
    filterBtnContainer: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 5,
        backgroundColor: '#0d568f',
    },
    outerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#ffffff',
        position: 'relative',
        //minHeight: '100%',
        fontFamily: 'Montserrat-Regular',
    },
    blackText: {
        color: '#000000',
    },
    greyText: {
        fontSize: 16,
        color: '#777777',
    },
    mainBoxOuter: {
        flex: 1,
    },
    mainHeader: {
        backgroundColor: '#970000',
        minWidth: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    backMenuDiv: {
        position: 'absolute',
        left: 16,
        top: 8,
    },
    backBtnDiv: {
        marginRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowBtn: {
        height: 15,
        width: 10,
        marginRight: 12,
    },
    arrowBtn: {
        height: 17,
        width: 12,
    },
    arrowBtnLight: {
        height: 19,
        width: 10,
    },
    sideMenuIcon: {
        height: 20,
        width: 25,
    },
    arrowText: {
        fontSize: 14,
        color: '#ffffff',
        fontFamily: 'Montserrat-Regular',
    },
    headerTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
    },
    mainBody: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        flex: 1,
    },
    mainTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
    },
    subTitle: {
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        marginVertical: 20,
        lineHeight: 22,
    },
    centerBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    mapImage: {
        width: '100%',
        minHeight: '100%',
        height: 250,
    },
    mapItem: {
        maxWidth: '100%',
    },
    mapBody: {
        backgroundColor: '#ffffff',
        position: 'relative',
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 2,
    },
    fixInfoDiv: {
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 8 },
        shadowOpacity: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 6,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: -20,
    },
    marginBottom: {
        marginBottom: 8,
    },
    dotIcon: {
        backgroundColor: '#9a0000',
        width: 6,
        height: 6,
        borderRadius: 6,
        marginRight: 6,
    },
    shipTextBig: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Montserrat-Regular',
    },
    shipTextSmall: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Montserrat-Regular',
    },
    shipTextBold: {
        fontFamily: 'Montserrat-SemiBold',
    },
    shipTextRed: {
        color: '#9a0000',
    },
    shipTextGrey: {
        color: '#b8b9ba',
    },
    shipTextDark: {
        color: '#33373a',
    },
    formTitleDiv: {
        marginBottom: 16,
        position: 'relative',
        zIndex: 1,
    },

    fixInfoBtnsDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingTop: 25,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 8 },
        shadowOpacity: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 4,
        marginLeft: -5,
        marginRight: -5,
    },
    srchFilterDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerFlex: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 3,
    },
    btnDefault: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#680001',
        borderColor: '#680001',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 40,
        position: 'relative',
        minWidth: 280,
    },
    btnFull: {
        minWidth: '100%',
    },
    btnTransparent: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#9a0000',
    },
    TextStyle: {
        fontSize: 14,
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
    },
    btmNavFix: {
        minWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnIcon: {
        width: 30,
        height: 30,
        textAlign: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    textBlue: {
        color: '#0d568f',
    },
    textGrey: {
        color: '#676974',
    },

    navigationContainer: {
        flex: 1,
        minHeight: '100%',
    },

    sidebarProOuter: {
        position: 'relative',
        paddingHorizontal: 18,
        paddingTop: 40,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sidebarProPatt: {
        position: 'absolute',
        backgroundSize: 'cover',
        alignItems: 'center',
        resizeMode: 'cover',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        opacity: 0.34,
    },
    sidebarProMediaDiv: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 90,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginRight: 16,
    },
    sidebarProMedia: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 78,
        height: 78,
        borderRadius: 78,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    sidebarProImg: {
        width: 70,
        height: 70,
    },
    sidebarLinkCol: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    sidebarLinkLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sidebarLinkIcon: {
        width: 40,
        height: 40,
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginRight: 12,
    },
    sidebarLinkImg: {
        width: 20,
        height: 20,
    },
    sidebarLinkText: {
        fontSize: 16,
        color: '#333333',
        fontFamily: 'Montserrat-SemiBold',
    },
    sidebarLinkArrow: {
        width: 10,
        height: 17,
    },
    formGroup: {
        marginBottom: 0,
        minWidth: '84%',
        position: 'relative',
        marginRight: 10,
    },
    formLabel: {
        fontSize: 16,
        color: '#221e1f',
        fontFamily: 'Montserrat-SemiBold',
        paddingBottom: 10,
    },
    formControl: {
        color: '#221e1f',
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#f4f4f4',
        fontFamily: 'Montserrat-Regular',
    },
    formGroupIcon: {
        position: 'relative',
    },
    formControlIcon: {
        paddingLeft: 36,
    },
    showHideIcon: {
        position: 'absolute',
        left: 15,
        top: 15,
        width: 16,
        height: 20,
    },
    filtrButton: {
        padding: 10,
        width: 'auto',
        borderRadius: 7,
    },
    bgOutrBox: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 16,
    },
    srchTitle: {
        marginVertical: 10,
        backgroundColor: '#d2edf8',
        borderRadius: 30,
        textAlign: 'center',
        paddingVertical: 12,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        paddingHorizontal: 10,
    },

    mainHdng: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    MainTitleDiv: {},
    mainTitleText: {
        fontSize: 19,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
    },
    mediumTitle: {
        fontSize: 13,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
    },
    mainTtlBrdr: {
        backgroundColor: '#0e558d',
        position: 'absolute',
        width: 96,
        height: 5,
        left: 0,
        bottom: 3,
        opacity: 0.24,
        zIndex: -1,
    },
    spaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    uperCase: {
        textTransform: 'uppercase',
    },
    mt10: {
        marginTop: 10,
    },
    py7: {
        paddingBottom: 7,
        paddingTop: 7,
    },
    pb10: {
        paddingBottom: 10,
    },
    pt8: {
        paddingTop: 8,
    },
    lstGrdCol: {
        flexDirection: 'row',
    },
    listIcon: {
        backgroundColor: '#f4f4f4',
        marginLeft: 10,
    },

    proprtyCardItem: {
        marginTop: 24,
        backgroundColor: '#f4f7ff87',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#c3c9cc',
    },
    proprtyCardCol: {
        marginHorizontal: -12,
        position: 'relative',
    },
    proprtyDefault: {
        backgroundColor: '#000000',
        position: 'absolute',
        right: 0,
        top: 10,
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Montserrat-Bold',
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 20,
        zIndex: 1,
    },
    proprtyCardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    proprtyCardRight: {
        flex: 1,
        paddingRight: 25,
        paddingLeft: 25,
    },
    prptyImg: {
        width: 130,
        height: 150,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    prptyFtrIcon1: {
        paddingRight: 3,
    },
    prptyFtrIcon: {
        paddingRight: 3,
        fontSize: 12.5,
    },
    prptyPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    prptyPriceSm: {
        fontSize: 15,
    },
    mgRt: {
        marginRight: 10,
    },
    addBtnDiv: {
        position: 'absolute',
        borderRadius: 50,
        right: 20,
        bottom: 20,
    },
    addBtn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: 'center',
        lineHeight: 50,
        alignItems: 'center',
    },
    addBtnBig: {
        width: 55,
        height: 55,
        lineHeight: 55,
        borderRadius: 55,
        paddingVertical: 0,
        textAlign: 'center',
        alignItems: 'center',
    },
    addBtnText: {
        fontSize: 32,
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
    },
    addBtnTextBig: {
        fontSize: 36,
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
    },
    cardActionDiv: {
        position: 'absolute',
        right: 27,
        top: 32,
    },
    deleteIcon: {
        width: 20,
        height: 23,
    },
});
