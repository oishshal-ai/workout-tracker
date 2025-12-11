import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddWorkoutPage from "./pages/AddWorkoutPage";
import EditWorkoutPage from "./pages/EditWorkoutPage";
import Layout from "./components/Layout/Layout";
import SwimWorkoutDetail from "./pages/SwimWorkoutDetail";
import WaterPoloWorkoutDetail from "./pages/WaterPoloWorkoutDetail";
import StrengthWorkoutDetail from "./pages/StrengthWorkoutDetail";
import ClimbWorkoutDetail from "./pages/ClimbWorkoutDetail";
import workoutsData from "./data";
import { useState } from "react";
import type { Workout } from "./types/workout";

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>(workoutsData);

  const handleDelete = (id: number | null) => {
    if (id !== null) {
      setWorkouts(workouts.filter((w) => w.id !== id));
    }
  };

  const handleAdd = (newWorkout: Workout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const handleUpdate = (updatedWorkout: Workout) => {
    setWorkouts(workouts.map((w) => (w.id === updatedWorkout.id ? updatedWorkout : w)));
  };

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        {/* Dashboard */}
        <Route
          path="/"
          element={<Dashboard workouts={workouts} onDelete={handleDelete} />}
        />

        {/* Detail pages */}
        <Route
          path="/swim/:id"
          element={<SwimWorkoutDetail onDelete={handleDelete} />}
        />
        <Route
          path="/waterpolo/:id"
          element={<WaterPoloWorkoutDetail onDelete={handleDelete} />}
        />
        <Route
          path="/strength/:id"
          element={<StrengthWorkoutDetail onDelete={handleDelete} />}
        />
        <Route
          path="/climb/:id"
          element={<ClimbWorkoutDetail onDelete={handleDelete} />}
        />

        {/* Add routes */}
        <Route
          path="/add"
          element={<AddWorkoutPage onAdd={handleAdd} />}
        />

        {/* Edit routes */}
        <Route
          path="/edit/:type/:id"
          element={<EditWorkoutPage onUpdate={handleUpdate} />}
        />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;