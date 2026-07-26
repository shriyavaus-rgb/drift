Drift 🌙

Some memories are worth waiting for.

Drift is a minimal, beautifully simple time capsule web app. Write a letter to your future self (or to a friend), pick a date, and seal it. The message stays locked until that exact date arrives — then it unlocks, ready to be read.

Built for [Beest by Hack Club](https://beest.hackclub.com) 🐴

## What it does

- **Create a capsule** — write a title, a letter, and choose an unlock date
- **Capsules stay locked** until their unlock date arrives — no peeking early
- **Automatic unlocking** — once the date passes, the letter becomes visible
- **Delete capsules** you no longer want to keep
- **Persists across visits** using your browser's local storage — your capsules are still there when you come back
- **Night sky aesthetic** — a calm, dreamy visual theme to match the emotional weight of writing to your future self

## Why I built this

I wanted to build something that felt personal — not just another CRUD app, but something that captures a real human moment: writing something down, sealing it away, and trusting time to bring it back to you. A time capsule felt like the perfect metaphor.

## Tech Stack

- **HTML** — structure
- **CSS** — styling and the night sky theme
- **Vanilla JavaScript** — all logic, no frameworks
- **LocalStorage** — capsule data persistence (no backend, no database)

This was intentional — I wanted to deeply understand the fundamentals of the DOM, events, and state management before reaching for frameworks or libraries.

## How to use it

1. Open the [live site](https://shriyavaus-rgb.github.io/drift/)
2. Click **Create Capsule**
3. Write a title and your letter, choose an unlock date
4. Click **Save Capsule** — it's sealed!
5. Come back anytime. Locked capsules show a countdown message; unlocked ones reveal your letter.

No sign-up, no setup, no installation required — just open and use.

## Running it locally

```bash
git clone https://github.com/shriyavaus-rgb/drift.git
cd drift
```

Then just open `index.html` in your browser, or use a tool like VS Code's Live Server extension.

## What I learned

This was my first major JavaScript project. Along the way I learned to:
- Debug real runtime errors using the browser console
- Work with `localStorage` to persist data without a backend
- Compare dates correctly in JavaScript (and the timezone pitfalls that come with it)
- Refactor repeated code into reusable functions
- Read and fix my own bugs — typos, scope issues, broken template literals — line by line

## Future improvements

- Shareable capsule links, so friends can send each other capsules
- A "days remaining" countdown on locked capsules
- Sorting capsules by unlock date
- Adding images/photos as part of a capsule

## Author

Built by [Shriya](https://github.com/shriyavaus-rgb) for Beest by Hack Club, 2026.
