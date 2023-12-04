import { create } from 'zustand'
import { getTodosGroupedByColumns } from '../lib/getTodosGroupedByColumn';

// interface BoardState {
//     board:Board;
//     getBoard:() => void;
// }

const useBoardStore = create((set) => ({
  board:{
    columns:new Map <TypedColumn,Column>()
  },

  getBoard: async() =>{
    const board = await getTodosGroupedByColumns();

    set({board});
  }
}))

export default useBoardStore

