import React, { useState } from 'react'
import './customer.css'

import AddModal from './AddCustomerModal'
import { updateStatusIsServed } from '../../store/action'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import { setCustomers } from '../../store/action'


export default function Customer({ customers }) {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const dataSearch = useSelector(state => state.customer.dataSearch)

  const isServedButton = (e, id) => {
    e.preventDefault(e)
    dispatch(updateStatusIsServed({id}))
  }

  const inputSearch = ((inputSearch) => {
    const filtered = dataSearch.filter(customer => {
      return customer.nama.toLowerCase().includes(inputSearch.toLowerCase())
    })
    dispatch(setCustomers(filtered))
  }) 

  return (
    <div>
      <h2 style={{ marginTop: "2rem"}}>List Visitor Pasien Rumah Sakit</h2>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="m-2">
              <SearchBar 
                input={input} 
                onChange={inputSearch}
              />
          </div>    
        </div>
      </div> 
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-add-product" data-bs-toggle="modal" data-bs-target="#example-Modal" data-bs-whatever="@getbootstrap">Add Pasien</button>
        <AddModal />
      </div>
      <table className="responsive-table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Nama Pasien</th>
            <th scope="col">Umur</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Pekerjaan</th>
            <th scope="col">Nama Ibu</th>
            <th scope="col">Kota</th>
            <th scope="col">Agama</th>
            <th scope="col">Gol. Darah</th>
            <th scope="col">No. KTP</th>
            <th scope="col">Tanggal Daftar</th>
            <th scope="col">Tujuan Pasien</th>
            <th scope="col">Status Pelayanan</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            customers.map((customer, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <th data-title="Nama" scope="row">{customer.nama}</th>
                  <td data-title="Umur">{customer.umur}</td>
                  <td data-title="Jenis Kelamin">{customer.jenisKelamin}</td>
                  <td data-title="Pekerjaan" data-type="currency">{customer.pekerjaan}</td>
                  <td data-title="Nama Ibu" data-type="currency">{customer.namaIbu}</td>
                  <td data-title="Kota" data-type="currency">{customer.kota}</td>
                  <td data-title="Agama" data-type="currency">{customer.agama}</td>
                  <td data-title="Gol. Darah" data-type="currency">{customer.golDarah}</td>
                  <td data-title="No. KTP" data-type="currency">{customer.noKtp}</td>
                  <td data-title="Tanggal Daftar" data-type="currency">{customer.tanggalDaftar}</td>
                  <td data-title="Tujuan Pasien" data-type="currency">{customer.tujuanPasien}</td>
                  <td data-title="Status Pelayanan" data-type="currency">{customer.status ? "Sudah ditangani" : "Belum ditangani"}</td>
                  <td data-title="Actions" data-type="currency">
                    <button onClick={(e) => isServedButton(e, customer._id)} type="button" className="btn btn-outline-success">IsServed</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}