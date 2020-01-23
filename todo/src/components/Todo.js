import React from 'react';

const Todo = props => {
    return (
        <div>
            {props.state.map(item => {
                return(
                    <div className={item.completed ? 'completed' : ''}
                    onClick={()=> props.dispatch(item.id)}
                    key={item.id}>
                        <p>{item.item}</p>
                    </div>
                )
            }
            )}
        </div>
    )

}
export default Todo;