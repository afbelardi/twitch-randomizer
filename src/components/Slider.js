import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


export default function FollowerSlider() {

    const PrettoSlider = withStyles({
        root: {
            color: '#F2F3F4',
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#6441A4',
            color: '#6441A4',
            border: '3px solid #F2F3F4',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
            border: '3px solid #F2F3F4',
            borderRadius: '50%'
        },
        track: {
            height: 7.5,
            borderRadius: 4,
        },
        rail: {
            height: 7,
            borderRadius: 4,
        },
    })(Slider);

    const marks = [
        {
            value: 0,
        },
        {
            value: 20,
        },
        {
            value: 37,
        },
        {
            value: 100,
        },
      ];

    return (
        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
    )
}