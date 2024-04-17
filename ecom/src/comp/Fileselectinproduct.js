import React, { useEffect, useState } from 'react'

export default function Fileselectinproduct(props) {
  return (
    <div> {
          <div className="dz-preview dz-processing dz-image-preview dz-error dz-complete" style={{ height: "100%" }} >
            <div className="dz-image"><img width={"100%"} data-dz-thumbnail src={props.images.url} alt={props.images.name} /></div>
            <div className="dz-details">
              <div className="dz-filename"><span data-dz-name>{props.images.name}</span></div>
            </div>
          </div>
    }
    </div>
  )
}
