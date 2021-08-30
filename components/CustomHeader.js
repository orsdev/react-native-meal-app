import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
   HeaderButtons,
   HeaderButton,
   Item
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
   <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const CustomHeader = ({ navigation }) => {
   return (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
         <Item
            title="Favorite"
            iconName="star-outline"
            onPress={() => navigation.navigate('Favorite')} />
      </HeaderButtons>
   )
}

export default CustomHeader;
