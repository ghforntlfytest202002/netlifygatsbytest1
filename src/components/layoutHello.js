import React from "react"

export default function LayoutHello({ children }) {
  return (
    <div className="hello-layout-header">~ Hello, I'm lorem ipsum for a header.~</div>
    <div className="hello-layout-main">
	  { children }
    </div>
	<div className="hello-layout-footer">~ Hello, I'm lorem ipsum for a footer.~</div>
  )
}