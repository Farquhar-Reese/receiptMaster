import Colors from "../../Constants/Colors";

const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default { 
    altCompBackground: {
        backgroundColor: "white",
        height: deviceHeight * 0.1 + 35,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    compBackground: {
        /**was deviceHeight*0.12 for iphone 5. Make it constant between devices */
        height: deviceHeight * 0.1 + 35,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#d3d3d3"
    },
    compContainer: {
        backgroundColor: "purple",
    },
    leftContainer: {
        width: deviceWidth * 0.33,
        height: "90%",
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
    rightContainer: {
        width: deviceWidth * 0.6,
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 8,
        marginLeft: 5,
        paddingVertical: 2,
        
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
        maxWidth: deviceWidth * 0.4,
        textAlign: "left"
    },
    purchaseText: {
        fontStyle: "italic",
        textDecorationLine: 'underline'
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
        backgroundColor: "#FFFFFF"
    },
    imageDimensions: {
        width: "100%",
        height: "100%",
        borderRadius: (deviceWidth * 0.1) / 2,
    }, detailImage: {
        width: "60%",
        height: "60%",
        borderRadius: (deviceWidth * 0.1) / 2,
    }, detailsContainer: {
        flex: 1,
        alignItems: "center"
    }, detailsSubContainer: {
        flex: 1,
        alignItems: "flex-start",
        width: "100%",
        padding: 10
    }, titleTxt4Details: {
        fontSize: 22,
        paddingVertical: 10,
    }, titleTxt4DetailsUnderlined: {
        fontSize: 22,
        paddingVertical: 10,
        textDecorationLine: 'underline',
    }, titleTxt4Detailsparagraph: {
        fontSize: 14
    }, noDataTxtBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: 10,
        flexDirection: "row"
    }, noDataTxt: {
        fontSize: 18,
        color: "gray"
    }

};