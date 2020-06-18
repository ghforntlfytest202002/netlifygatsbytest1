import React from "react"

export default function LayoutHello({ children }) {
  return (
    <div className="hello-layout-header">Header lorem ipsum</div>
    <div className="hello-layout-main">
	  { children }
    </div>
	<div className="hello-layout-footer">Footer lorem ipsum</div>
  )
}