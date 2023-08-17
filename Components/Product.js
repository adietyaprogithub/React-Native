import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';

import {addToCart} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {UseSelector} from 'react-redux';

const Product = ({items}) => {
  const dispatch = useDispatch();
  const cartitem = useSelector(state => state.reducer);
  const [edit, setedit] = useState(false);

  const handleraddtocart = item => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    if (cartitem && cartitem.length) {
      cartitem.forEach(item => {
        if (item.name == items.name) {
          setedit(true);
        }
      });
    }
  }, [cartitem]);

  return (
    <View>
      <Text>Product</Text>
      <ScrollView>
        {items.map((item, i) => {
          return (
            <View
              key={i}
              style={{alignItems: 'center', borderBottomColor: 'red'}}>
              <Text style={{fontSize: 30}}>{item.name}</Text>
              <Text style={{fontSize: 30}}>{item.price}</Text>
              <Text style={{fontSize: 30}}>{item.color}</Text>

              {edit ? (
                <Button
                  title="Remove Cart"
                  onPress={() => handleraddtocart(item)}>
                  {' '}
                </Button>
              ) : (
                <Button
                  title="Add to Cart"
                  onPress={() => handleraddtocart(item)}></Button>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Product;
