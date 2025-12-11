# Database Schema

This document describes the database schema for the Workout Tracker application.  
It captures the structure of tables, their columns, and relationships.

---

## Tables

### Users
| Column      | Type        | Constraints         | Description                  |
|-------------|-------------|---------------------|------------------------------|
| id          | Integer     | PK, Auto-increment  | Unique user identifier       |
| username    | Varchar(150)| Unique, Not null    | User’s login name            |
| email       | Varchar(255)| Unique, Not null    | User’s email address         |
| password    | Varchar(255)| Not null            | Hashed password              |
| created_at  | Timestamp   | Default: now()      | Account creation date        |

---

### Workouts
| Column         | Type        | Constraints         | Description                          |
|----------------|-------------|---------------------|--------------------------------------|
| id             | Integer     | PK, Auto-increment  | Unique workout identifier            |
| user_id        | Integer     | FK → Users.id       | Owner of the workout                 |
| type           | Varchar(50) | Not null            | swim, waterpolo, strength, climb     |
| date           | Date        | Not null            | Workout date                         |
| start_time     | Time        | Not null            | Start time                           |
| end_time       | Time        | Not null            | End time                             |
| calories       | Integer     | Optional            | Calories burned                      |
| total_distance | Integer     | Optional            | Total distance (for swim/climb)      |
| climb_type     | Varchar(50) | Optional            | bouldering, lead, toprope, mix       |
| lead_grade     | Varchar(50) | Optional            | Lead climbing grade                  |
| top_rope_grade | Varchar(50) | Optional            | Top rope grade                       |
| boulder_grade  | Varchar(50) | Optional            | Boulder grade                        |

---

### Swim Sets
| Column     | Type        | Constraints         | Description                          |
|------------|-------------|---------------------|--------------------------------------|
| id         | Integer     | PK, Auto-increment  | Unique swim set identifier           |
| workout_id | Integer     | FK → Workouts.id    | Parent workout                       |
| count      | Integer     | Not null            | Number of repetitions                |
| distance   | Integer     | Not null            | Distance per repetition (m)          |
| stroke     | Varchar(50) | Not null            | Stroke type (freestyle, backstroke…) |
| interval   | Integer     | Not null            | Rest interval (seconds)              |

---

### Strength Exercises 
| Column     | Type        | Constraints         | Description                          |
|------------|-------------|---------------------|--------------------------------------|
| id         | Integer     | PK, Auto-increment  | Unique exercise identifier           |
| workout_id | Integer     | FK → Workouts.id    | Parent workout                       |
| name       | Varchar(255)| Not null            | Exercise name (bench press, squat…)  |

---
### Strength Sets
| Column      | Type        | Constraints                | Description           |
|-------------|-------------|----------------------------|-----------------------|
| id          | Integer     | PK, Auto-increment         | Unique set identifier |
| exercise_id | Integer     | FK → StrengthExercises.id  | Parent exercise       |
| reps        | Integer     | Not null                   | Number of repetitions |
| weight      | Integer     | Not null                   | Weight used (kg)      |

---

## Relationships

- **Users → Workouts**: One user can have many workouts.  
- **Workouts → SwimSets**: One workout can contain many swim sets (if type = swim).  
- **Workouts → StrengthExercises**: One workout can contain many strength exercises (if type = strength).  
- **StrengthExercises → StrengthSets**: One exercise can contain many sets. 

---

## ER Diagram

```mermaid
erDiagram
    USERS ||--o{ WORKOUTS : owns
    WORKOUTS ||--o{ SWIMSETS : includes
    WORKOUTS ||--o{ STRENGTHEXERCISES : includes
    STRENGTHEXERCISES ||--o{ STRENGTHSETS : contains
