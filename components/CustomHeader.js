import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
   HeaderButtons,
   HeaderButton
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
   <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const CustomHeader = ({ navigation, children }) => {
   return (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
         {children}
      </HeaderButtons>
   )
}

export default CustomHeader;
