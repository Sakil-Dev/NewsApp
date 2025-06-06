# News Portal App

A modern news application built with React that fetches and displays news from various categories using the NewsAPI.

## Features

- Real-time news updates
- Category-based news filtering
- Search functionality
- Responsive design
- Modern UI with gradient themes
- Newsletter subscription
- Contact form

## Technologies Used

- React 18+
- Vite
- React Router DOM
- Bootstrap 5
- Font Awesome
- NewsAPI

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Sakil-Dev/news-app.git
   ```

2. Install dependencies:
   ```bash
   cd news-app
   npm install
   ```

3. Create a `.env` file in the root directory and add your NewsAPI key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
news-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── NewsBoard.jsx
│   │   ├── NewsItems.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   └── App.jsx
└── package.json
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
