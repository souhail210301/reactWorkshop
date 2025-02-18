import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Events from './ComponentEvent/Events';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'

import ClassComponent from './CourseComponents/Components/ClassComponent'

import FunctionalComponent from './CourseComponents/Components/FunctionalComponent'

import Methods from './CourseComponents/ClassComponentLifeCycle/Methods'

import Mounting from './CourseComponents/ClassComponentLifeCycle/Mounting'

import Update from './CourseComponents/ClassComponentLifeCycle/Update'

import Unmounting from './CourseComponents/ClassComponentLifeCycle/Unmounting'

import Counter from './ExercicePropsCounter/Counter'

import ListManager from './ExercicePropsCounter/ListManager'

import ToDoListComponent from './ExercicePropsCounter/ToDoListComponent'





function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </div>
        </Router>
    );
}

// Composant Home simple
const Home = () => {
    return (
        <div className="container mt-4">
            <h1>Welcome to Esprit Events</h1>
            <p>Discover and book amazing events!</p>
        </div>
    );
};

export default App
