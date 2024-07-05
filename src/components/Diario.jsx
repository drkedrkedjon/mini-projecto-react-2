import React from 'react'
import Card from './Card'
import data from '/src/assets/data'


export default function Diario() {
  const tarjetas = data.map( tarjeta => {
    return <Card
      {...tarjeta} 
      // title = {tarjeta.title}
      // location = {tarjeta.location} 
      // googleMapsUrl = {tarjeta.googleMapsUrl}
      // startDate = {tarjeta.startDate}
      // endDate = {tarjeta.endDate}
      // description = {tarjeta.description}
      // imageUrl = {tarjeta.imageUrl}
    />
  })

  return (
    <div className='container'>
      {tarjetas}
    </div>
  )
}