import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
  LayoutAnimation,
} from 'react-native'  

import Style from './Style.js'

export default class ProgressBarClassic extends React.Component {
  constructor() {
    super()
    this.state = {
      progress: 0,
      init_animation: false,
    }
  }

  componentDidMount() {
    LayoutAnimation.spring()
    setTimeout(()=>{
      this.setState({progress: this.props.progress})
    }, 0)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({progress: nextProps.progress})
  }

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  render() {
    const value = false
    const valueBalloon = false
    const label = false
    const marginTop = 0
    console.log('ProgressBarClassic 组件 this.state, this.props ：', this.state, this.props, )
    switch (this.props.valueStyle) {
      case 'baloon':
        valueBalloon = (
          <View style={Style.flexBox}>
            <View style={[{flex:this.state.progress}]}>
              <View style={Style.progressBar__balloon}>
                <View style={Style.progressBar__balloonArrow}></View>
                <Text style={Style.progressBar__balloonVal}>{this.state.progress}%</Text>
              </View>
            </View>
            <View style={[{flex:100 - this.state.progress}]}></View>
          </View>
        )
        marginTop = 30

        break
      case 'none':
        break
      default:
        value = (
          <View style={Style.progressBar_mes}>
            <Text style={Style.progressBar__val}>{this.state.progress}%</Text>
          </View>
        )
        break
    }

    if (this.props.valueStyle !== 'baloon' && this.props.label) {
      marginTop = 20
      label = (
        <View style={Style.labelWrap}>
          <Text style={Style.label}>{this.props.label} {this.props.value && `: ${this.props.value}` }</Text>
        </View>
      )
    }

    const chart = (
      <View>
        {valueBalloon}
        {label}
        <View style={[Style.flexBox, Style.progressBar, {marginTop: marginTop}]}>
          <View style={[Style.progressBar_left, {flex:this.state.progress}]}>
            {value}
          </View>
          <View style={[Style.progressBar_right, {flex:100 - this.state.progress}]}></View>
        </View>

      </View>
    )
    return chart
  }
}

ProgressBarClassic.defaultProps = {
  progress: 0,
}