import { StyleSheet } from "react-native";


const colors = {
    color1: "rgb(233, 181, 172)",
    color1Dark: "rgb(201, 153, 145)",
    color1Darker: "rgb(170, 129, 122)",
    color2: "rgb(139, 125, 171)",
    color2Dark: "rgb(103, 93, 128)",
    color2Darker: "rgb(68, 61, 85)"

}

export const GlobalStyles = StyleSheet.create({


    sudoku: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.color2,
        padding: 50,
        height: 100,
    },
    
    tile: {
        width: 40,
        height: 40,
        textAlign: "center",
        fontSize: 32,
        //outline: "none",
        backgroundColor: colors.color1,
        //border: "2px solid black",
        marginLeft: -1,
        marginTop: -1,
      },
      
      taken: {
        backgroundColor: colors.color1Dark,
        color: colors.color2Darker,
      },
      
      initial: {
        marginLeft: -1,
        marginTop: -1,
        width: 40,
        height: 40,
        textAlign: "center",
        fontSize: 32,
        //outline: "none",
        backgroundColor: colors.color1Darker,
      //border  : "solid 2px black",
      },
      
      board: {
        //display: "grid",
        //gridTemplateColumns: "repeat(9, 0fr)",
        padding: 20,
      },
      
      interface: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      },
    
      infoInterfaceInput: {
        width: 250,
        height: 40,
        textAlign: "center",
        fontSize: 24,
        //utline: "none",
        color: colors.color2Dark,
        backgroundColor: colors.color1,
        //border: "2px solid rgb(139, 125, 171)",
        marginBottom: 20,
      },
      infoInterface: {
        // FILL THIS
      }, 
      generatorButtonBtn:{

      },
      
      actionInterface: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      },
      
      button: {
        backgroundColor: colors.color1,
        padding: "8 24",
        //border: `2px solid ${colors.color2Dark}`,
        borderRadius: 8,
        color: colors.color2Dark,
        fontSize: 18,
        //transition: "0.1s all ease-in-out",
      },
      
     /*  button:hover: {
        cursor: "pointer",
        transform: "scale(1.05)",
        backgroundColor: colors.color1Dark,
      }, */
      
});