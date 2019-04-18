/**
 * Author: Quan Vo
 * Date: 2/23/19
 */

import React from "react";
import {connect} from "react-redux";
import {ActivityIndicator, Text, View} from "react-native";


/**
 * WARNING: this is a common component, be careful if you want to change anything
 */
const Screen = ({
                  containerStyle,
                  style,
                  children,
                  Header,
                  loading,
                }) => (
    <View style={[{flex: 1, zIndex: 9999,}, containerStyle]}>
      {Header}

      {loading && (
          <View
              style={{
                zIndex: 99,
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.2)"
              }}
          >
            <View
                style={[
                  comStyle.boxShadow,
                  {
                    borderRadius: 20,
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.7)"
                  }
                ]}
            >
              <ActivityIndicator size="large" color='yellow'/>
              <Text
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "white"
                  }}> Loading... </Text>
            </View>
          </View>
      )}

      <View style={[{flex: 1}, style]}>{children}</View>
    </View>
);

const mapStateToProps = state => ({
  ...state.screen
});

export default connect(mapStateToProps)(Screen);
