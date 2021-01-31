import Colors from "../Constants/Colors";

const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default { 
    headerView: {
        height: deviceHeight * 0.12,
        width: deviceWidth,
        paddingTop: 20,
        backgroundColor: Colors.tintColor
      },
      headerView4Text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      backArrowBut: {
        flex: 0.5,
        position: "absolute",
        top: "50%",
        paddingHorizontal: 25,
        zIndex: 12
      },
      headerText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 25
      },
      hideDisplay: {
        display: "none"
      }
};