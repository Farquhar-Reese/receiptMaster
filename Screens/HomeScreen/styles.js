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
        width: "100%",
        height: "100%",
        borderRadius: (deviceWidth * 0.1) / 2
       
    },
    leftContainer: {
        width: deviceWidth * 0.33,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }, 
    leftContainerInner: {
        width: "90%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: (deviceWidth * 0.1) / 2,
        backgroundColor: "orange"
    },
    compBackground: {
        /**was deviceHeight*0.12 for iphone 5. Make it constant between devices */
        height: deviceHeight * 0.1 + 35,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#d3d3d3",
    },
    detailPgInput: {
        height: "auto",
        flexWrap: "wrap",
        margin: 12,
        borderWidth: 2,
        borderColor: Colors.tintColor,
        borderRadius: (deviceWidth * 0.1) / 2,
        padding: 10,
        textAlignVertical: 'top'
        
    },
    detailPgInputLarge: {
        textAlignVertical: 'top',
        height: 100,
        flexWrap: "wrap",
        margin: 12,
        borderWidth: 2,
        borderColor: Colors.tintColor,
        borderRadius: (deviceWidth * 0.1) / 2,
        padding: 10,
    },
    detailsTitles: {
        fontSize: 18,
        color: Colors.tintColor,
        fontWeight: "bold"
    },
    butContainer: {
        flexDirection: "row", 
        width: "100%", 
        height: "auto", 
        justifyContent: "center", 
        alignItems: "center", 
        display: "flex",
        
    }, 
    butStyle: {
        width: "auto",
        height: "auto",
        padding: 15,
        backgroundColor: Colors.tintColorAlt,
        borderRadius:  (deviceWidth * 0.1) / 2
    },
    butTxt: {
        color: "white",
        fontSize: 20
    }, addButStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        
    }
}