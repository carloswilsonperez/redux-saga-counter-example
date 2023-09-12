import React, { Component, PropTypes } from 'react'
import './styles.styl'

const Counter = (props) =>
      <div>
        <div className='msgBlock'>
          Clicked: {props.count} times
        </div>
        <div className='block'>
          <button className='plusBtn' onClick={props.increment}>
            +
          </button>
          <button className='minusBtn' onClick={props.decrement}>
            -
          </button>
        </div>
        <div className='block'>
          <button className='plusBtn' onClick={props.incrementAsync}>
            + ( async )
          </button>
          <button className='minusBtn' onClick={props.decrementAsync}>
            - ( async )
          </button>
        </div>
      </div>

export default Counter;
