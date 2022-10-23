import React from 'react'

const Jauge = ({index,total,onChanged,max,value}) => {
    return (
        <div className="progesse-fill jauge-box" style={{ "--index": index, "--total": total }}>
            <div className="fill jauge">
            </div>
            <input type="range" onChange={onChanged} value={value} min={0} max={max} />
        </div>
    )
}

export default Jauge