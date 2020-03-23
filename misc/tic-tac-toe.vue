<template>
  <div>
    <table>
      <tr class="column" v-for="(col,indexCol) in board" :key="indexCol">
        <td class="row" v-for="(row,indexRow) in col" :key="indexRow">
          <Tile @click="captureTile(indexCol, indexRow)" :cellValue="board[indexCol][indexRow]"></Tile>
        </td>
      </tr>
    </table>

    <div v-if="gameEnded">Game Ended</div>
  </div>
</template>

<script>
import Tile from "./components/Tile";

export default {
  name: "App",
  components: {
    Tile
  },
  data() {
    return {
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      nextValue: 1,
      inputCount: 0,
      gameEnded: false
    };
  },
  methods: {
    captureTile(col, row) {
      this.updateBoard(col, row);
      this.gameEnded = this.checkGameEnded(this.nextValue, col, row);
      this.toggleNextValue();
      this.inputCount += 1;
    },
    checkGameEnded(valuePlayed, col, row) {
      console.log(`col ${col}`);
      if (this.inputCount === 8) return true;

      //Vertical
      if (
        this.board[0][row] === valuePlayed &&
        this.board[1][row] === valuePlayed &&
        this.board[2][row] === valuePlayed
      ) {
        return true;
      }

      //Horizontal
      if (
        this.board[col][0] === valuePlayed &&
        this.board[col][1] === valuePlayed &&
        this.board[col][2] === valuePlayed
      ) {
        return true;
      }
      
      //Diagonal
      if (
        this.board[0][0] === valuePlayed &&
        this.board[1][1] === valuePlayed &&
        this.board[2][2] === valuePlayed
      ) {
        return true;
      }
      if (
        this.board[0][2] === valuePlayed &&
        this.board[1][1] === valuePlayed &&
        this.board[2][0] === valuePlayed
      ) {
        return true;
      }


    },
    updateBoard(col, row) {
      if (this.board[col][row] === 1 || this.board[col][row] === 0) return;
      this.board[col][row] = this.nextValue;
      this.$forceUpdate();
      console.log(this.board);
    },
    toggleNextValue() {
      this.nextValue = this.nextValue === 0 ? 1 : 0;
    }
  }
};
</script>

<style>
td {
  border: 1px solid black;
  height: 50px;
  width: 50px;
}
</style>
