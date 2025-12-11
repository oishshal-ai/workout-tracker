-- Users table
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Workouts table
CREATE TABLE Workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    type TEXT NOT NULL CHECK(type IN ('swim','waterpolo','strength','climb')),
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    calories INTEGER,
    total_distance INTEGER,
    climb_type TEXT,
    lead_grade TEXT,
    top_rope_grade TEXT,
    boulder_grade TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id)
);

-- SwimSets table
CREATE TABLE SwimSets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER NOT NULL,
    count INTEGER NOT NULL,
    distance INTEGER NOT NULL,
    stroke TEXT NOT NULL,
    interval INTEGER NOT NULL,
    FOREIGN KEY(workout_id) REFERENCES Workouts(id)
);

-- StrengthExercises table
CREATE TABLE StrengthExercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY(workout_id) REFERENCES Workouts(id)
);

-- StrengthSets table
CREATE TABLE StrengthSets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    exercise_id INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    FOREIGN KEY(exercise_id) REFERENCES StrengthExercises(id)
);
