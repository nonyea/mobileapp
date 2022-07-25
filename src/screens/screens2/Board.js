import React from "react";
import { GlobalStyles } from "../../Style";
import Tile from "./Tile";
import {View} from "react-native"

function Board({ puzzle, grid, handleChange }) {
  return (
    <View /* className="board" */ style={GlobalStyles.board}>
      <Tile puzzle={puzzle} grid={grid} handleChange={handleChange} />
    </View>
  );
}

export default Board;
