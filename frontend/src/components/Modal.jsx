import ReactDom from 'react-dom'
import React from 'react'
import { DefaultContext } from 'react-icons/lib';

const Modal = ({isOpen, children}) => {
  if(!isOpen)
    return null;

  return ReactDom.createPortal(
    <div className='overlay-bg-panel'>
        {children}
    </div>,
    document.getElementById('overlay-content')
  )
}

export default Modal;