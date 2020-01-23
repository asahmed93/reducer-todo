

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const TodoReducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return [...state,
                {item: action.payload, completed: false, id: Date.now()}]
        case "COMPLETE":
            return state.map(item => {
                return item.id === action.payload ? { ...item, completed: !item.completed} : item
            })
        case "CLEAR":
            return state.filter(el => !el.completed)
        default: {
            return state
        };
    }
}
