import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomer } from '../../store/action'
import { postCustomer } from '../../store/action'

export default function AddModal() {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer.customer)
  const [nama, setNama] = useState('')
  const [umur, setUmur] = useState(null)
  const [jenisKelamin, setJenisKelamin] = useState('')
  const [pekerjaan, setPekerjaan] = useState('')
  const [namaIbu, setNamaIbu] = useState('')
  const [kota, setKota] = useState('')
  const [agama, setAgama] = useState('')
  const [golDarah, setGolDarah] = useState('')
  const [noKtp, setnoKtp] = useState(null)
  const [tujuanPasien, setTujuanPasien] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(postCustomer({nama, umur, jenisKelamin, pekerjaan, namaIbu, kota, agama, golDarah, noKtp, tujuanPasien}))
  }

  return (
    <div class="modal fade" id="example-Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Pasien</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form style={{ textAlign: "left" }} onSubmit={submitForm}>
            <div class="modal-body modal-add-product">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nama</label>
                <input value={nama} onChange={(e) => setNama(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Umur</label>
                <input value={umur} onChange={(e) => setUmur(e.target.value)} type="number" class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
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
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Pekerjaan</label>
                <input value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">namaIbu</label>
                <input value={namaIbu} type="text" onChange={(e) => setNamaIbu(e.target.value)} class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Kota</label>
                <input  value={kota} type="text" onChange={(e) => setKota(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Agama</label>
                <input  value={agama} type="text" onChange={(e) => setAgama(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Gol. Darah</label>
                <input  value={golDarah} type="text" onChange={(e) => setGolDarah(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">No. KTP</label>
                <input  value={noKtp} type="text" onChange={(e) => setnoKtp(e.target.value)} type="number" class="form-control" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Tujuan Pasien</label>
                <input value={tujuanPasien} type="text" onChange={(e) => setTujuanPasien(e.target.value)} type="text" class="form-control" aria-describedby="emailHelp" />
              </div>
            </div>
            <div class="modal-footer">
              <div class="mt-4 d-flex justify-content-center w-100">
                <button type="submit" class="btn btn-outline-primary" data-bs-dismiss="modal" onClick={submitForm}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}