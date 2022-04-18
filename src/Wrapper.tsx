import React from "react";

type WrapperProps = { children?: React.ReactNode }

function Wrapper(props: WrapperProps) {
    const style = {
        border: '2px solid black',
        padding: '16px'
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Wrapper;
