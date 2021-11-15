import Colors from "../../Constants/Colors";
import { ThemeContext, themes } from "../../Constants/darkModeTheme";

const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default { 
  
    container: {
        flex: 1,
        backgroundColor: "white"      },
      userStatuscontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      userStatus: {
        marginTop: 20,
        marginBottom: 12,
        width: 235,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#fff",
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: Colors.tintColor,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row"
      },
      userStatusInnerText: {
        fontSize: 20,
        marginLeft: 0,
        zIndex: 3
      },
      userStatusInnerTextActive: {
        fontSize: 20,
        marginLeft: -50,
        zIndex: 3
      },
      userStatusInnerActive: {
        position: "absolute",
        height: "100%",
        marginTop: -Dimensions.get("window").height * 0.031,
        width: 120,
        borderRadius: 50,
        marginLeft: -25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.tintColor
      },
      developmentModeText: {
        marginBottom: 20,
        color: "rgba(0,0,0,0.4)",
        fontSize: 14,
        lineHeight: 19,
        textAlign: "center"
      },
      contentContainer: {
        paddingTop: 0
      },
      userPicContainer: {
        alignItems: "center",
        marginBottom: 5
      },
      userImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Colors.tintColor,
        resizeMode: "contain",
        marginTop: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      getStartedContainer: {
        alignItems: "center",
        marginHorizontal: 50
      },
      homeScreenFilename: {
        marginVertical: 7
      },
      codeHighlightText: {
        color: "rgba(96,100,109, 0.8)"
      },
      codeHighlightContainer: {
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 3,
        paddingHorizontal: 4
      },
      getStartedText: {
        fontSize: 17,
        color: "rgba(96,100,109, 1)",
        lineHeight: 24,
        textAlign: "center"
      },
      tabBarInfoContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
          ios: {
            shadowColor: "black",
            shadowOffset: { height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3
          },
          android: {
            elevation: 20
          }
        }),
        alignItems: "center",
        backgroundColor: "#fbfbfb",
        paddingVertical: 20
      },
      tabBarInfoText: {
        fontSize: 17,
        color: "rgba(96,100,109, 1)",
        textAlign: "center"
      },
      navigationFilename: {
        marginTop: 5
      },
      ReportButcontainer: {
        width: 240,
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: Colors.tintColor,
        borderRadius: 20
      },
      AoRCCBut: {
        width: 210,
        fontSize: 16,
        alignItems: "center",
        marginTop: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: Colors.tintColor,
        borderRadius: 20
      },
      AoRCCButText: {
        color: "#fff"
      },
      SignOutCont: {
        marginBottom: 15,
        marginTop: 15,
        alignItems: "center"
      },
      reportBut: {
        fontSize: 20,
        textAlign: "center",
        color: "#fff"
      },
      HeaderTxt: {
        fontSize: 18,
        paddingLeft: 12,
        marginTop: 15,
        marginBottom: 6,
        fontWeight: "bold"
      },
      listTxtContainer: {
        width: Dimensions.get("window").width,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        paddingHorizontal: 12
      },
      listTxt: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 8
      },
      line: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: 1.5,
        backgroundColor: "black",
        marginTop: 3,
        marginBottom: 6
      },
      purpose: {
        flex: 1,
        backgroundColor: Colors.tintColorAlt,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        padding: 20
    },
    purposeTxt: {
        textAlign: "center",
        color: "white",
        fontSize: 18
    },
    purposeTxtPurple: {
      textAlign: "center",
        color: "purple",
        fontSize: 18
    },
    searchBarContainer: {
      width:deviceWidth, 
      height: deviceHeight * 0.07,
      backgroundColor: Colors.tintColor,
      justifyContent: "center",
      alignItems: "center"
  },
  searchBar: {
      width:"95%", 
      height: "100%",
      paddingLeft:20,
      borderRadius: 3, 
      maxHeight:40,
      backgroundColor: "white"
  }, stateBut: {
    backgroundColor: Colors.tintColor,
    padding: 14,
    borderRadius: "20%"

  }
};