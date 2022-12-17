import React from 'react'

export default function Card(props) {
  return (
    <section className='card'>
      <div className="card--img">
        <img src={props.imageUrl} alt={`Imagen del ${props.title}`} />
      </div>
      <div className="card--content">
        <p>🎯 <span className="card--location">{props.location}</span> <a className="card--mapa" href={props.googleMapsUrl}>Ver en DuckDuckGo</a></p>
        <h2>{props.title}</h2>
        <p className="card--fecha">{props.startDate} - {props.endDate}</p>
        <p className="card--desc">{props.description}</p>
      </div>
    </section>
  )
}