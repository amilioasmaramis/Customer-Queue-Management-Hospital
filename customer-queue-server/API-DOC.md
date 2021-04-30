**CUSTOMER QUEUE MANAGEMENT APPLICATION API DOCUMENTATION**
----

CUSTOMER QUEUE MANAGEMENT is app untuk mendaftarkan seorang pasien yang ingin berobat ke rumah sakit, and all the data is stored / fetched via REST API to backend server. 
This app has :
* RESTful endpoint
* JSON formatted response

List of available endpoints:
​
- `POST /users/register`
- `POST /users/login`
- `POST /customers/`
- `GET /customers/`
- `PUT /customers/:_id`

### `POST /users/register`

> Register User

Request:

- data:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "user": {
    "username": "string",
    "email": "string",
    "password": "string",
    "_id": "string-id"
    },
  "message": "string"
}
```

* **Success Response:**

  * **Code:** 201 CREATED<br />
    **Content:** 
    ```json
    {
        "user": {
          "username": "test",
          "email": "test@mail.com",
          "password": "$2a$10$C74Ey2yYfMdlOTa7DXuMK.uJCTztaFbXoSfAjkrM40lToTc/vLhLi",
          "_id": "60803b1f1a34192140d9a646"
      },
      "message": "Add new User successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "errorCode": "Validation error",
      "message": "Please enter username, email and password"
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }
    ```

### `POST /users/login`

> Login User

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
    "access_token": "string",
    "id": "string-id"
}
```

* **Success Response:**

  * **Code:** 201 CREATED<br />
    **Content:** 
    ```json
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwM2IxZjFhMzQxOTIxNDBkOWE2NDYiLCJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpYXQiOjE2MTkwMjM5NTF9.DUqmaiDpave2Wi3HUkA6QAMxuUM6KP-obD_alXJreVg",
      "id": "60803b1f1a34192140d9a646",
      "username": "test"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "errorCode": "Validation error",
      "message": "Please enter email and password"
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }
    ```


### `POST /customers/`

> Create new Customer

Request:

- headers:

```json
{
  "access_token": "req.headers access_token
}
```

- data:

```json
{
  "income": "string",
  "detail": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "nama": "string",
  "umur": "integer",
  "jenisKelamin": "string",
  "pekerjaan": "string",
  "namaIbu": "string",
  "kota": "string",
  "agama": "string",
  "golDarah": "string",
  "noKtp": "integer",
  "tanggalDaftar": "date",
  "tujuanPasien": "string",
  "status": "boolean",
  "_id": "objectid mongodb"
}
```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
      "nama": "user1",
      "umur": 20,
      "jenisKelamin": "Laki-laki",
      "pekerjaan": "Dagang",
      "namaIbu": "userIbu",
      "kota": "Tegal",
      "agama": "Islam",
      "golDarah": "B",
      "noKtp": 3376031508960001,
      "tanggalDaftar": "2021-04-30T17:33:45.621Z",
      "tujuanPasien": "Copot jahitan",
      "status": false,
      "_id": "608c3f79bb73ae4742b2dd23"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "errorCode": "Validation error",
      "message": "Input invalid"
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }
    ```


### `GET /customers/`

> Get list of all Customer 

Request:

- data:

```json
{
  "UserId": "<your token id>",
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "budget": [
    {
      "_id": "string-id",
      "UserId": "string-id",
      "income": "integer",
      "detail": "string",
      "createdAt": "date"
    },
    ....
}
```
* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 
    ```json 
    {
      "dataCustomer": [
          {
            "_id": "608c3f79bb73ae4742b2dd23",
            "nama": "user1",
            "umur": 20,
            "jenisKelamin": "Laki-laki",
            "pekerjaan": "Dagang",
            "namaIbu": "userIbu",
            "kota": "Tegal",
            "agama": "Islam",
            "golDarah": "B",
            "noKtp": "3376031508960001",
            "tanggalDaftar": "2021-04-30T17:33:45.621Z",
            "tujuanPasien": "Copot jahitan",
            "status": false
          },
          {
            "_id": "608c3c6cea93293de14eaee4",
            "nama": "user1",
            "umur": 20,
            "jenisKelamin": "Laki-laki",
            "pekerjaan": "Dagang",
            "namaIbu": "userIbu",
            "kota": "Tegal",
            "agama": "Islam",
            "golDarah": "B",
            "noKtp": "3376031508960001",
            "tanggalDaftar": "2021-04-30T17:20:44.794Z",
            "tujuanPasien": "Copot jahitan",
            "status": true
          },
          ....
        ]
      }
      ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** 
    ```json
    {
      "errorCode": "Unauthorized",
      "message": "Please login first"
    }
    ```

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }
    ```

### `PUT /customers/:_id`

> Update Status Customer is Served, ketika sudah ditangani, status jadi true(sudah ditangani)

Request:

- headers:

```json
{
  "access_token": "req.headers access_token"
}
```

- data:

```json
{
  "_id": "objectid mongodb",
  "status": "boolean"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "message": "string
}
```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
      "message": "Update Customer is Served successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```json
    {
        "errorCode": "Internal server error",
        "message": "Unexpected error."
    }
    ```