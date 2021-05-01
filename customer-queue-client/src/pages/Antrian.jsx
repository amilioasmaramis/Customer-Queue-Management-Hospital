import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Login/login.css"

import { addAntrian } from '../store/action'

// var antrianTest = 1
export default function Antrian() {
  const antrian = useSelector(state => state.customer.antrian)
  const [antrianTest, setAntrianTest] = useState(0)
  const date = new Date()
  const dispatch = useDispatch()

  const antrianButton = (e) => {
    e.preventDefault()
    setAntrianTest(antrianTest + 1)
    dispatch(addAntrian(antrianTest))
  }

  return (
    <section>
      <div className="d-flex justify-content-center">
        <button onClick={(e) => antrianButton(e)} type="button" className="btn btn-add-product">Ambil Antrianmu</button>
      </div>
      <div className="card" style={{ width: "18rem"}}>
      <img src="https://images.unsplash.com/photo-1519686848819-af8eaff13a7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2FpdGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="card-body">
          <h5 className="card-title">Solusi Teknologi Hospital</h5>
          <p className="card-text">Mohon mengantri ya bos</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Antrianmu</li>
          <li className="list-group-item">No. {antrianTest} </li>
          <li className="list-group-item">Terimakasih sudah mengantri</li>
          <li className="list-group-item">Barcode: </li>
        </ul>
      </div>
    </section>
  )
}