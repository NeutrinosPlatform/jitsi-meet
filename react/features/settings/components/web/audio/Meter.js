// @flow

import React from 'react';
import { Icon, IconMeter } from '../../../../base/icons';

type Props = {

    /**
     * Own class name for the component.
     */
    className: string,

    /**
     * Flag indicating whether the component is greyed out/disabled.
     */
    isDisabled?: boolean,

    /**
     * The level of the meter.
     * Should be between 0 and 7 as per the used SVG.
     */
    level: number,
};

/**
 * React {@code Component} representing an audio level meter.
 *
 * @returns { ReactElement}
 */
export default function({ className, isDisabled, level }: Props) {
    let ownClassName;

    if (level > -1) {
        ownClassName = `metr metr-l-${level}`;
    } else {
        ownClassName = `metr ${isDisabled ? 'metr--disabled' : ''}`;
    }

    return (
        <Icon
            className = { `${ownClassName} ${className}` }
            size = { 12 }
            src = { IconMeter } />
    );
}
