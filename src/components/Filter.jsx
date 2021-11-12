import React from 'react'
import './styles/filter.css'
import { BiChevronDown } from "react-icons/bi";

function Filter() {
    return (

        <ul className='filter-list'>
            <div>  World<span><BiChevronDown /></span></div>
            <div>  Following<span><BiChevronDown /></span></div>
            <div>  Popular<span><BiChevronDown /></span></div>
            <div>  Post<span><BiChevronDown /></span></div>
            <div>  Gender<span><BiChevronDown /></span></div>
            <div>  Location<span><BiChevronDown /></span></div>
            <div>  Profession<span><BiChevronDown /></span></div>
            <div>  Location<span><BiChevronDown /></span></div>
        </ul>

    )
}

export default Filter
