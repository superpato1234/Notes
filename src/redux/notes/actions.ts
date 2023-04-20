
export function ADD_NOTE(state:any,action:any) {
    ++state.id
    state.notes.push({
        id:state.id+1,
        title:action.payload
    })
} 

export function DELETE_NOTE(state:any) {
    state.notes.pop()
}