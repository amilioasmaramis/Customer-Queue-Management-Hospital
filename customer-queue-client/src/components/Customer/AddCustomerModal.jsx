import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomer } from '../../store/action'
import { postCustomer } from '../../store/action'

export default function AddModal() {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer.customer)
  const [nama, setNama] = useState('')
  const [umur, setUmur] = useState(0)
  const [jenisKelamin, setJenisKelamin] = useState('')
  const [pekerjaan, setPekerjaan] = useState('')
  const [namaIbu, setNamaIbu] = useState('')
  const [kota, setKota] = useState('')
  const [agama, setAgama] = useState('')
  const [golDarah, setGolDarah] = useState('')
  const [noKtp, setnoKtp] = useState(0)
  const [tujuanPasien, setTujuanPasien] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(postCustomer({nama, umur, jenisKelamin, pekerjaan, namaIbu, kota, agama, golDarah, noKtp, tujuanPasien}))
    setNama('')
    setUmur(0)
    setJenisKelamin('')
    setPekerjaan('')
    setNamaIbu('')
    setKota('')
    setAgama('')
    setGolDarah('')
    setnoKtp(0)
    setTujuanPasien('')
  }

  return (
    <div className="modal fade" id="example-Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Pasien</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form style={{ textAlign: "left" }} onSubmit={submitForm}>
            <div className="modal-body modal-add-product">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nama</label>
                <input value={nama} onChange={(e) => setNama(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Umur</label>
                <input value={umur} onChange={(e) => setUmur(e.target.value)} type="number" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Jenis Kelamin
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={jenisKelamin}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                >
                  <option disabled value="">
                    Select Option
                  </option>
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Pekerjaan</label>
                <input value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">namaIbu</label>
                <input value={namaIbu} type="text" onChange={(e) => setNamaIbu(e.target.value)} className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Kota</label>
                <input  value={kota} type="text" onChange={(e) => setKota(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Agama</label>
                <input  value={agama} type="text" onChange={(e) => setAgama(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Gol. Darah</label>
                <input  value={golDarah} type="text" onChange={(e) => setGolDarah(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">No. KTP</label>
                <input  value={noKtp} type="text" onChange={(e) => setnoKtp(e.target.value)} type="number" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Tujuan Pasien</label>
                <input value={tujuanPasien} type="text" onChange={(e) => setTujuanPasien(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
              </div>
            </div>
            <div className="modal-footer">
              <div className="mt-4 d-flex justify-content-center w-100">
                <button type="submit" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={submitForm}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}