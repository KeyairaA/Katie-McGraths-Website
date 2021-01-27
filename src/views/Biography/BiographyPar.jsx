import React from "react";

// How to destruct variables out of past props
// export const BiographyPar = ({dataItem}) => {
export const BiographyPar = (props) => {
    //destructing data from props within component instead of past values
    const {dataItem} = props
    return <p className="bio">{dataItem}</p>
}