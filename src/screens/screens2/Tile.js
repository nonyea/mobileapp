import React from "react";
import { TextInput } from "react-native-paper";
import { GlobalStyles } from "../../Style";
import View from "react-native";
import { StyleSheet, Alert, Button, Text, SafeAreaView } from 'react-native';


function Tile({ puzzle, grid, handleChange }) {
  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return (
        <TextInput
          style={
            puzzle[rowIndex][colIndex] !== 0
              ? GlobalStyles.initial
              : col !== 0
              ? [GlobalStyles.taken, GlobalStyles.tile]
              : GlobalStyles.tile
          }
          value={col === 0 ? "" : col}
          key={rowIndex + " " + colIndex}
          type="text"
          onChange={(e) => handleChange(rowIndex, colIndex, e)}
        />
      );
    });
  });
}

export default Tile;
