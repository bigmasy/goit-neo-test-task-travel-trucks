# TravelTrucks

**TravelTrucks** is a web application for searching and selecting modern campers for travel. The project was created for outdoor enthusiasts who value comfort, functionality, and style.

## Main Features

- Search for campers by parameters (location, body type, availability of kitchen, bathroom, etc.)
- Filters for personalizing the choice
- Ability to view a list of favorite campers
- Convenient booking interface
- Notification system for errors or successful actions
- Support for different devices (responsive design)
- View detailed camper pages with gallery, characteristics, reviews, and booking form
- Load more functionality for camper listings

## Installation Instructions

1. **Cloning the repository**

```bash
git clone https://github.com/bigmasy/goit-neo-test-task-travel-trucks.git
```

2. **Installing dependencies**

```bash
npm install
```

3. **Starting the project**

```bash
npm run dev
```

The project will be available at [http://localhost:3000](http://localhost:3000)

## Technologies

- Frontend: React, Redux Toolkit, React Router v6, CSS Modules, MUI (Material UI)
- HTTP Requests: Axios
- Deployment: Vercel

## Routes

- `/` – Home page with banner and "View Now" button
- `/catalog` – Catalog page with filters and "Load More" button
- `/catalog/:id` – Detailed camper page with gallery, characteristics, reviews, and booking form

## Functionalities

- Viewing the catalog of campers
- Filtering by location, body type, and amenities (AC, kitchen, bathroom, TV, refrigerator, etc.)
- Adding campers to favorites with `localStorage` persistence
- Navigation to detailed camper pages
- "Load More" functionality to fetch additional campers
- Reviews displayed with 5-star rating system
- Booking form with notifications for successful submission
- Loader displayed during asynchronous requests
- Active tab highlighted with a red underline on details page

## Deployment Instructions

1. Create an account on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Set the build command:

```bash
npm run build
```

4. The site will be deployed automatically and accessible via the generated URL

## Notes

- Component-based architecture used
- DRY principle followed
- Code is formatted and commented where necessary
- HTML and CSS validated
- Routing works correctly
- Favorites list persists in `localStorage`
- API for campers: [https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)
