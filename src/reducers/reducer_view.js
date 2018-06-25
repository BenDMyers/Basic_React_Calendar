export default function(state=[new Date().getFullYear(), new Date().getMonth()], action) {
    switch(action.type) {
        case 'UPDATE_VIEW':
            return action.payload;
    }
    return state;
}
