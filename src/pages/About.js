

import db from './firbase';
import {useState} from 'react';

export const About = () => {
    const [name  , Setname] = useState("");
    const [age , Setage] = useState("");
    const [sex , Setsex] = useState("");

    return <h1>About</h1>;
 };