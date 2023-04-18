
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwFhY16WbjZ2kjnxk7U8gH6G3xEYEYwk8",
  authDomain: "pbbapp-3cda1.firebaseapp.com",
  projectId: "pbbapp-3cda1",
  storageBucket: "pbbapp-3cda1.appspot.com",
  messagingSenderId: "248758143610",
  appId: "1:248758143610:web:37bd5b05082b7cac1e09c3",
  measurementId: "G-NJEBDSWJYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(app);

// Get references to the HTML form and its elements
const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');

// Add an event listener to the submit button
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  
  // Get the values from the form
  const title = titleInput.value;
  const content = contentInput.value;
  
  // Create a new post object
  const post = {
    title,
    content,
    timestamp: new Date()
  };
  
  try {
    // Add the post to Firestore
    const docRef = await addDoc(collection(db, 'post'), post);
    
    // Log the document ID for debugging purposes
    console.log(`Document written with ID: ${docRef.id}`);
    
    // Display a success message
    alert('Post added successfully!');
    
    // Clear the form inputs
    titleInput.value = '';
    contentInput.value = '';
  } catch (error) {
    console.error('Error adding document: ', error);
  }
});
