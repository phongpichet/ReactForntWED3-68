const Hello = ({message,name})=>{
    console.log({message,name});
    return(
        <div>
            <h1>{name} {message}</h1>
        </div>
    )
}

import PropTypes from 'prop-types';

Hello.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}


export default Hello
