import { Col } from "native-base";
import Colors from "../../Constants/Colors";

const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    homeBackground: {
        backgroundColor: Colors.tintColor
    },
    cameraBox: {
        width: deviceWidth,
        height: deviceHeight * 0.72,
        backgroundColor: "green",
    },
    photoAlbumButton: {
        width: deviceWidth,
        height: deviceHeight * 0.075,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: Colors.tintColor
    },
    photoAlbumButtonText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        width: deviceWidth * 0.7,
    },
    titleBox: {
        width: deviceWidth,
        height: deviceHeight * 0.05,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: deviceHeight * 0.01
    },
    title: {
        backgroundColor: Colors.tintColor,
        width: "40%",
        height: deviceHeight * 0.05,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    imageDimensions: {
        width: "50",
        height: "50",
        borderRadius: (deviceWidth * 0.1) / 2,
    }
}