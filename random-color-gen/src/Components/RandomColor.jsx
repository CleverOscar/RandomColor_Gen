import React from 'react';

import ColorInput from './ColorInput';

export default function RandomColor(){

    return(
        <div className='bg-gray-800/10 max-w-sm mx-auto mt-10 p-4'>
            Random Color Generator Main Component

            <ColorInput />
        </div>
    )
}