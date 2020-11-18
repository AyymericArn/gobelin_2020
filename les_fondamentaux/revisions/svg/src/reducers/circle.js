export const initialState = { oddAnimated: true, circles: [] }

export default (state, action) => {
    switch (action.type) {
        case 'ADD_CIRCLE':
            return { circles: [...state.circles, { id: state.circles.length, animated: true } ] }
            break;

        case 'SHUFFLE':
            return { circles: state.circles.sort(() => (0.5 - Math.random()) ) }
            break;

        case 'STOP_ODD':
            return { circles: state.circles.map(circle => circle.id % 2 === 0 ? circle : {...circle, animated: false} ) }
            break;

        case 'START_ODD':
            return { circles: state.circles.map(circle => { return {...circle, animated: true}} ) }
            break;
        
        case 'SQUARE':
            const circles = [...state.circles]
            circles[state.circles.length - 1].square = true
            return { circles }
            break;
    
        default:
            return state;
    }
}