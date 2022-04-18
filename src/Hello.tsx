import React from "react";

function Hello(props: NameProp) {
    return (
        <div style={{color: props.color}}>
            {props.isSpecial && <b>*</b>}
            안녕하세요 {props.name}
        </div>
    )
}

export type NameProp = {
    name: string
    color: string
    isSpecial: boolean
}

export default Hello;
