import React from 'react'
import '../App.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import TodoList from '../components/TodoList/TodoList'

export default function Home() {
  return (
    <div className='container-fluid'>
      <div className='child-div shadow-lg p-3'>
        <figure>
        <img src="https://media.istockphoto.com/vectors/flat-design-sketchbook-icon-with-long-shadow-vector-id476250294?k=20&m=476250294&s=612x612&w=0&h=xIw1e8_o3FSyKM0nIL6ERP4McwpktOtCok5mKaqESzE=" alt="TodoImg" />
        </figure>
        <figcaption className='fig-caption'>Add your task here ✌️</figcaption>
      <TodoList/>
      </div>
    </div>
  )
}
