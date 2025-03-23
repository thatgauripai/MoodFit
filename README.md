# MoodFit
MoodFit is a personal mood tracking and journaling web application built with Next.js and Tailwind CSS. It allows users to track their mood, write journal entries, and save their progress for self-reflection.

## Features

- **Mood Tracker**: Select your current mood and get a motivational message.
- **Journal**: Write down your thoughts and save previous entries.
- **Navigation**: Easily switch between features using a navbar.
- **Data Persistence**: Keeps journal entries and mood history saved using local storage.

## Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/thatgauripai/MoodFit.git
   ```
2. Navigate into the project folder:
   ```sh
   cd MoodFit
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- **Next.js** - React framework for server-side rendering.
- **Tailwind CSS** - Utility-first CSS framework.
- **TypeScript** - For type safety and better code quality.

## Folder Structure
```
MoodFit/
│-- public/        # Static assets
│-- components/    # Reusable components (Navbar, Buttons, etc.)
│-- pages/         # Next.js pages (index.tsx, moodtracker.tsx, journal.tsx)
│-- styles/        # Global styles
│-- utils/         # Helper functions
│-- package.json   # Project metadata and dependencies
│-- README.md      # Project documentation
```

## Contributing
Feel free to contribute by submitting pull requests or reporting issues!

## License
This project is open-source and available under the [MIT License](LICENSE).

