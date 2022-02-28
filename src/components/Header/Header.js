import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AD from 'react-native-vector-icons/AntDesign';

import globalS from 'src/assets/globalStyle';
import { wpx } from 'utils/dimensions';
import styles from './Header.css';

const ICON_MAP = {
  [globalS.icon.BACK]: () => (
    <AD name="caretleft" size={wpx(20)} color='red' />
  ),
};

class Header extends Component {
  renderIcon = (side) => {
    const iconData = side === 'left' ? this.props.leftIcon : null;
    if (!iconData) {
      return <View style={styles.iconTouch} />;
    }
    const icon = ICON_MAP[iconData.name];
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => (iconData.onPress ? iconData.onPress() : null)}
        style={styles.iconTouch}
      >
        {icon()}
      </TouchableOpacity>
    );
  };

  renderRightComponent = () => {
    return this.renderIcon('right')
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderIcon('left')}

        {this.props.title && (
          <Text style={styles.bigwords}>
            {this.props.title}
          </Text>
        )}
        {this.renderRightComponent()}
      </View>
    );
  }
}

export default Header;