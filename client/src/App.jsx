import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import CustomItemList from "./components/CustomItemList";
import CreateMileStone from './pages/CreateMileStone';
import MilestoneDetails from './pages/MilestoneDetails';
import EditMilestone from './pages/EditMilestone';

import './App.css';

const App = () => {
  return (
    <div>
    <Navigation />
      <Routes>
      <Route path="/" element={<CustomItemList />} />
          <Route path="create-milestone" element={<CreateMileStone />} />
          <Route path="edit-milestone/:id" element={<EditMilestone />} />
          <Route path="milestone/:id" element={<MilestoneDetails />} />
      </Routes>
      </div>
  );
}

export default App;