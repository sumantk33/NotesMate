# NotesMate

Website for college students community to share notes and have discussions about college activities.

## Deployment

You can find the deployed website [here](https://notesmatee.herokuapp.com/)

## Features

- Notes of all branches which can be downloaded
- Discussion forum
- User can add notes which will be verified by the admin.
- Admin contact for query

## Usage

### Env Variables

Create a .env file in the root and add the following

```
PORT = 5000
NODE_ENV = development
MONGO_URI = your MongoDB URI
JWT_SECRET = add your own JWT secret
```

### Installing

Clone the repository into your device and install dependancies using the following commands.

```bash
npm install
cd frontend
npm install
```

### Running the application

To run React and express:-

```
npm run dev
```

To run React Client:-

```
npm run client
```

To run Express API:-

```
npm run server
```

## Built With

- [React](https://reactjs.org/docs/getting-started.html/) - The JavaScript library used for Front-End
- [Express](https://expressjs.com/en/starter/installing.html/) - NodeJs web application framework for API
- [MongoDB](https://www.mongodb.com//) - Database used to store the info
