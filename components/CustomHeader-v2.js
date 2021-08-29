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

const ReusableItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />;

const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />;

const HeaderBtns = () => {
   return (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
         <Item title="search" iconName="search" onPress={() => alert('search')} />
         <ReusableItem onPress={() => alert('Edit')} />
         <OverflowMenu
            style={{ marginHorizontal: 10 }}
            OverflowIcon={({ color }) => <Ionicons name="md-ellipsis-horizontal-sharp" size={23} color={color} />}
         >
            <HiddenItem title="hidden1" onPress={() => alert('hidden1')} />
            <ReusableHiddenItem onPress={() => alert('hidden2')} />
         </OverflowMenu>
      </HeaderButtons>
   )
}

export default HeaderBtns
