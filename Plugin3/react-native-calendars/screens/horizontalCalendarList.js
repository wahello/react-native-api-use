import React, {Component} from 'react';

import {CalendarList} from 'react-native-calendars';
import {View} from 'react-native';

export default class HorizontalCalendarList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('HorizontalCalendarList 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CalendarList
          current={'2012-05-16'}
          pastScrollRange={24}
          futureScrollRange={24}
          horizontal
          pagingEnabled
          style={{borderBottomWidth: 1, borderBottomColor: 'black'}}
        />
      </View>
    );
  }
}
