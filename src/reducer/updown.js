

const initialState = 0;
export const ChangeNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'Increment': return state + 1;
        case "Decrement": return state - 1
        default: return state;
    }
}