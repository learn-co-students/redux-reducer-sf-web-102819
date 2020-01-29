export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND" :
            return {friends: [...state.friends, action.friend]};
        case "REMOVE_FRIEND" :
            let friend_index = state.friends.findIndex(friend => friend.id === action.id)
            let new_friends = [...state.friends]
            new_friends.splice(friend_index, 1)
            return {friends: new_friends}
        default:
            return state;
    }
}
