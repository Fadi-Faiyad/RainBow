import React from "react";

function ColorBlock({ color }){
    let stlye = {'background': color}
    return <div className="colorBlock"
                style={stlye}
            >
        
        
        <p>{color}</p>
    </div>
}
export default ColorBlock