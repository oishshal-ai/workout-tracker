-- Users table
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(150) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Workouts table
CREATE TABLE Workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL CHECK(type IN ('swim','waterpolo','strength','climb')),
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    calories INTEGER,
    total_distance INTEGER,
    climb_type VARCHAR(50),
    lead_grade VARCHAR(50),
    top_rope_grade VARCHAR(50),
    boulder_grade VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES Users(id)
);

-- SwimSets table
CREATE TABLE SwimSets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER NOT NULL,
    count INTEGER NOT NULL,
    distance INTEGER NOT NULL,
    stroke VARCHAR(50) NOT NULL,
    interval INTEGER NOT NULL,
    FOREIGN KEY(workout_id) REFERENCES Workouts(id)
);

-- StrengthExercises table
CREATE TABLE StrengthExercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
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
