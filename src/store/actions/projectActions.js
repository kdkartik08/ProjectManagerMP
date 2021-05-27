export const createProject = (project) => {
    return (dispatch, getState)=> {
        //Make async call to database, once call is completed
        dispatch({ type: 'CREATE_PROJECT', project:project })
    };
};