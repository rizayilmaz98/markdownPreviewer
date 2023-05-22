import { createSlice} from "@reduxjs/toolkit";

export const writesSlice = createSlice({
  name: "writes",
  initialState: {
    text: "",
  },
  reducers: {
    changeText : (state,action) => {
        state.text = action.payload;
    },
    exampleText : (state,action) => {
        if(action.payload ==="example"){
            state.text = `
Heading
=======
            
Sub-heading
-----------
            
### Another deeper heading
            
Paragraphs are separated
by a blank line.
            
Leave 2 spaces at the end of a line to do a
line break
            
Text attributes *italic*, **bold**
            
Shopping list:
            
* apples
* oranges
* pears
            
Numbered list:
            
1. apples
2. oranges
3. pears`
        } else{
            state.text = "";
        }
    }
  }
});
export const {changeText,exampleText} = writesSlice.actions;
export default writesSlice.reducer;