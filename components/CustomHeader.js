import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
   HeaderButtons,
   HeaderButton,
   Item,
   HiddenItem,
   OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
   <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const CustomHeader = () => {
   return (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
         <Item
            title="Favorite"
            iconName="star-outline"
            onPress={() => alert('favorite')} />
      </HeaderButtons>
   )
}

export default CustomHeader;
