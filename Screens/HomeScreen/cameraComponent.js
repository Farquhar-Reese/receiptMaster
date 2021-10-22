import React, { Component } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
//import * as Permissions from "expo-permissions"; --> this is depreciated
import { Camera } from "expo-camera";
import * as ImagePicker from 'expo-image-picker';
import Icon from "react-native-vector-icons/FontAwesome";

class CameraComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hasCameraPermission: null,
          type: Camera.Constants.Type.back
        };
      }

      componentDidMount = async () => {
        console.log("componentDidMount cameraComponent");
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({ hasCameraPermission: status === "granted" });
      };

      snapPicture = async () => {
        const photoRAW = await this.camera.takePictureAsync();
        //const asset = await MediaLibrary.createAssetAsync(uri)

        // console.log("photo:", photo);
        this.props.onPicture(photoRAW);
      };

      renderTopBar = () => (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              height: 40,
              backgroundColor: "transparent",
              justifyContent: "flex-start",
              marginLeft: 30,
              marginTop: 30,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
          </View>
        </View>
      );
      renderBottomBar = () => (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end"
          }}
        >
          <View
            style={{
              height: 200,
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity onPress={this.snapPicture}>
              <Icon
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
                name="circle-thin"
                size={100}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      );

      render() {
          return(
            <View style={{ alignItems: "stretch", flex: 1 }}>
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ flex: 1, width: Dimensions.get("window").width }}
              type={this.state.type}
            >
              {this.renderTopBar()}
              {this.renderBottomBar()}
            </Camera>
          </View>
          );
      }
}

export default CameraComp;