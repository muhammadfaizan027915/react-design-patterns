import React from 'react';

const PartialComponents = (Component, partialprops) => {
    return (props) => <Component {...partialprops} {...props} />;
}

export default PartialComponents;
