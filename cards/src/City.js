import React, {useState} from 'react'

const Cities = ({img, loc}) => {
    const [active, setActive] = useState(false);
    return (
        <div
        onClick={() => setActive(!active)}
        className={active === true ? 'panel active' : 'panel' }
        style={{backgroundImage: `url(${img})` }}
      >
        <h3>{loc}</h3>
      </div>
      
    
    )
}

export default Cities
