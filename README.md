## User Auth boilerplate code with Express - Mongo - Node

#### KINDLY ADD YOUR MONGO URL IN .env FILE

Install Depency

```bash
    npm i
```

Start Backend Server

```bash
    nodemon index.js
```

PORT using by APIs

```bash
    10000
```

## API Reference

#### Login

```http
  POST /api/user/login
```

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `email`    | `string` | NA          |
| `password` | `string` | NA          |

### Register

```http
  POST /api/user/register
```

| Parameter   | Type     | Description  |
| :---------- | :------- | :----------- |
| `email`     | `string` | **Required** |
| `password`  | `string` | **Required** |
| `firstName` | `string` | **Required** |
| `lastName`  | `string` | NA           |
| `role`      | `string` | **Required** |

### User Data

```http
   GET /api/user/userdata/userid={userID}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `userID`  | `string` | **Required**. TOKEN - BEARER TOKEN |

you can get that by hitting login API

### Update User Data

```http
   POST /api/user/updateuserdata/userid={userID}
```

| Parameter   | Type     | Description  |
| :---------- | :------- | :----------- |
| `email`     | `string` | **Required** |
| `password`  | `string` | **Required** |
| `firstName` | `string` | **Required** |
| `lastName`  | `string` | NA           |
| `role`      | `string` | **Required** |

BEARER TOKE IS ALSO REQ.
