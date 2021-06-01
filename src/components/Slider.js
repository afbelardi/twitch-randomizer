import React, {useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import TheContext from '../context/index';


export default function FollowerSlider(props) {

    const PrettoSlider = withStyles({
        root: {
            color: '#F2F3F4',
            height: 8,
            marginTop: '50px',
            width: '325px',
            marginLeft: '25px',
          
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

    const context = useContext(TheContext)

    const getValue = (value, index) => {
        context.setViewerCount(value)
    }

    return (
        <PrettoSlider valueLabelDisplay="auto" aria-label="custom thumb label" defaultValue={0}
        min={0}
        max={5000}
        step={250}
        track='normal'
        />
    )
}