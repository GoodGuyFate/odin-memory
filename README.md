# League of Legends Memory Game

A memory card game built with React, using the [League of Legends Data Dragon API](https://developer.riotgames.com/docs/lol) to display random champion cards. Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## How to Play

Each round you're shown 12 random League of Legends champions. Click each card once — but don't click the same champion twice! Cards shuffle after every click to keep you on your toes.

- ✅ Click a new champion → score goes up
- ❌ Click the same champion twice → score resets
- 🏆 Click all 12 without repeating → you win

Your best score is saved between sessions.

## What I Built

- Fetches champion data from the Data Dragon API on load
- Randomly selects 12 champions and shuffles them using a Fisher-Yates shuffle
- Tracks clicked cards using `useRef` with a `Set` for O(1) lookup
- Score and best score managed with `useState`, best score persisted with `localStorage`
- Responsive grid layout (6 / 4 / 3 columns for desktop / tablet / mobile)
- LoL-themed UI with gold accents and corner bracket styling

## Tech Stack

React · Vite · CSS · Data Dragon API

## Live Demo

[Play it on Vercel](https://odin-memory-ecru.vercel.app/) 

---

*Not affiliated with Riot Games. League of Legends assets used for educational purposes.*