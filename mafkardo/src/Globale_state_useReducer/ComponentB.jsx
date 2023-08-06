import React from 'react';
import { useContext } from 'react';
import { conterContext } from '../App';

export default function Component(){
    const context = useContext(conterContext)
    return (
        <div>
            <p>Component A</p>
            <button type="button" onClick={()=>context.contextDispatch('increment')}>
                inrement
            </button>
            <button type="button" onClick={()=>context.contextDispatch('decrement')}>
                decrement
            </button>
        </div>
    )
}