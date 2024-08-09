import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBT_X1pg8MGQ1YuGUnqXbShhTnJjzZ_2HU",
  authDomain: "king-dev-e58b6.firebaseapp.com",
  projectId: "king-dev-e58b6",
  storageBucket: "king-dev-e58b6.appspot.com",
  messagingSenderId: "539702132262",
  appId: "1:539702132262:web:ea89e1a879da5037f0f0e7",
  measurementId: "G-BGT018J52R"
};

const app = initializeApp(firebaseConfig);

export { app };