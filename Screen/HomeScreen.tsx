import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SearchBar, SearchBarProps } from '@rneui/themed';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const updateSearch = (searchText: string) => {
    setSearch(searchText);
  };

  const searchbarProps: SearchBarProps = {
    placeholder: 'Find Your Coffee......',
    onChangeText: updateSearch,
    value: search,
    containerStyle: styles.searchBarContainer,
    inputContainerStyle: styles.searchBarInputContainer,
    inputStyle: styles.searchBarInput,
  };

  const categories = [
    {
      id: 10,
      name: 'ALL',
    },
    {
      id: 1,
      name: 'Cappuccino',
    },
    {
      id: 2,
      name: 'Latte',
    },
    {
      id: 3,
      name: 'Espresso',
    },
    {
      id: 4,
      name: 'Tea',
    },
    {
      id: 5,
      name: 'Americano',
    },
    {
      id: 6,
      name: 'Macchiato',
    },
  ];
  const renderItem = ({ item }:{item:any}) => (
    <TouchableOpacity
      onPress={() => setSelectedItem(item.id)}
      style={[styles.item, selectedItem === item.id && { backgroundColor: '#0C0F14' }]}
    >
      <Text style={[styles.itemTitle, selectedItem === item.id && { color: '#D17842' }]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.imageIcon} source={require('./Acces/icon1.png')} />
        <Image style={styles.imageIcon} source={require('./Acces/avtpng.png')} />
      </View>
      {/* ... other content ... */}
      {/* Pass the searchbarProps as props */}
      <SearchBar {...searchbarProps} />
      <View>
        <FlatList
          horizontal={true}
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    flex: 1,
    padding: 10,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconimg: {},
  imageIcon: {
    width: 30,
    height: 30,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#21262E',
  },
  contentHead: {
    width: 192,
    height: 72,
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    lineHeight: 36,
    color: '#fff',
    marginLeft: 30,
    marginTop: 20,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginVertical: 10,
  },
  searchBarInputContainer: {
    backgroundColor: '#21262E',
    borderRadius: 10,
  },
  searchBarInput: {
    color: '#fff',
  },
  item: {
    padding: 10,
    backgroundColor: '#0C0F14',
    margin: 5,
    borderRadius: 10,
  },
  itemTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: '600',
    color: '#52555A',
    lineHeight: 20,
  },
});

export default HomeScreen;
