import * as React from 'react';
import { CircularProgressProps } from 'chanmin-ui-lib';

const CircularProgress = (props: CircularProgressProps) => {
    return (
        <svg {...props}>
            <circle />
        </svg>
    )
};

export default CircularProgress;