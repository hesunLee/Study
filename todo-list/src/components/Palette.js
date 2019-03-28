import React from 'react';
import './Palette.css'

const Color = ({color, active, onClick}) => {
    return (
        <div
            className={`color ${active && 'active'}`}
            onClick={onClick}
            style={{backgroundColor: color.chip}}
        >
        </div>
    )
}


const Palette = ({ colors, selected, onSelect }) => {
    const colorList = colors.map(
        (color) => (
            <Color color={color} active={color.cId === selected.cId} onClick={() => onSelect(color.cId)} key={color.cId}/>
        )
    )

    return (<div className="palette">
            {colorList}
        </div>)
}


export default Palette;