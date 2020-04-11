import { createSlice } from "@reduxjs/toolkit";

//reducer
let lastId = 0;
const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducer: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolve: false
      });
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id)
      bugs[index].resolved = true;
    }
  }
});

export const {bugAdded, bugResolved} = slice.actions;
export default slice.reducer;