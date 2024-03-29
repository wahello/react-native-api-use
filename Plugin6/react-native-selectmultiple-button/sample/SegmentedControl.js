
import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import { SelectMultipleGroupButton } from '../index.js'

const themeColor = '#0D1014'
const ios_blue = '#007AFF'

export default class SegmentedControl extends Component {
  render() {
    console.log('SegmentedControl 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <SelectMultipleGroupButton
          multiple={false}
          group={[
            { value: 'XC40' },
            { value: 'XC60' },
            { value: 'XC90' },
            { value: 'S90' }]}
          defaultSelectedIndexes={[0]}
          buttonViewStyle={{ flex: 1, margin: 0, borderRadius: 0 }}
          highLightStyle={{
            borderColor: 'green', textColor: 'green', backgroundColor: themeColor,
            borderTintColor: 'green', textTintColor: 'white', backgroundTintColor: 'green'
          }}
        />
        <View style={{height: 100, }}/>
        <SelectMultipleGroupButton
          multiple={false}
          group={[
            { value: 'XC40' },
            { value: 'XC60' },
            { value: 'XC90' },
            { value: 'S90' }]}
          defaultSelectedIndexes={[3]}
          buttonViewStyle={{width:100, margin: 0, borderRadius: 0 }}
          highLightStyle={{
            borderColor: ios_blue, textColor: ios_blue, backgroundColor: themeColor,
            borderTintColor: ios_blue, textTintColor: 'white', backgroundTintColor: ios_blue
          }}
          containerViewStyle={{flexDirection:'column',}}
        />
      </View>
    )
  }
}