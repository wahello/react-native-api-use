import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Modal from "react-native-modal";

import styles from "./app.style";

export default class Example extends Component {
  state = {
    visibleModal: null
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton("Close", () => this.setState({ visibleModal: null }))}
    </View>
  );

  _handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };

  _handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };

  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        {this._renderButton("Default modal", () =>
          this.setState({ visibleModal: 1 })
        )}
        {this._renderButton("Sliding from the sides", () =>
          this.setState({ visibleModal: 2 })
        )}
        {this._renderButton("A slower modal", () =>
          this.setState({ visibleModal: 3 })
        )}
        {this._renderButton("Fancy modal!", () =>
          this.setState({ visibleModal: 4 })
        )}
        {this._renderButton("Bottom half modal", () =>
          this.setState({ visibleModal: 5 })
        )}
        {this._renderButton("Modal that can be closed on backdrop press", () =>
          this.setState({ visibleModal: 6 })
        )}
        {this._renderButton("Swipeable modal", () =>
          this.setState({ visibleModal: 7 })
        )}
        {this._renderButton("Scrollable modal", () =>
          this.setState({ visibleModal: 8 })
        )}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 2}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 3}
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 4}
          backdropColor={"red"}
          backdropOpacity={1}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 5}
          style={styles.bottomModal}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 6}
          onBackdropPress={() => this.setState({ visibleModal: null })}
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 7}
          onSwipe={() => this.setState({ visibleModal: null })}
          swipeDirection="left"
        >
          {this._renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 8}
          onSwipe={() => this.setState({ visibleModal: null })}
          swipeDirection="down"
          scrollTo={this._handleScrollTo}
          scrollOffset={this.state.scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          style={styles.bottomModal}
        >
          <View style={styles.scrollableModal}>
            <ScrollView
              ref={ref => (this.scrollViewRef = ref)}
              onScroll={this._handleOnScroll}
              scrollEventThrottle={16}
            >
              <View style={styles.scrollableModalContent1}>
                <Text>Scroll me up</Text>
              </View>
              <View style={styles.scrollableModalContent1}>
                <Text>Scroll me up</Text>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}