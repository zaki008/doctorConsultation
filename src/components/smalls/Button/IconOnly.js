import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IcArrowDark, IcBackLight} from '../../../assets';


const IconOnly = ({onPress, icon}) => {
    const Icon = () =>{
        if (icon === 'back-dark'){
            return <IcArrowDark />;
        }
        if (icon === 'back-light'){
            return <IcBackLight />;
        }
        return <IcArrowDark />;
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    );
};

export default IconOnly;

