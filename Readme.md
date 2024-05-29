
# 🛒 Next.js eCommerce App with Admin Panel

## Project Overview

This project is a full-featured eCommerce application built with Next.js. It includes both a customer-facing store and an admin panel for managing products, orders, and other administrative tasks. The app leverages modern web technologies and best practices, including server-side rendering, API routes, and state management with Redux.

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Installation](#-installation)
- [📂 Directory Structure](#-directory-structure)
- [📋 Usage](#-usage)
- [🔒 Authentication](#-authentication)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## ✨ Features

- **Customer-Facing Store**
  - 🏠 Home page with product listings
  - 📄 Product detail pages
  - 🛒 Shopping cart functionality
  - 📱 Responsive design

- **Admin Panel**
  - 📊 Dashboard overview
  - 🛍️ Manage products (CRUD operations)
  - 📦 Manage orders
  - 🔒 Protected routes for admin access

- **Other Features**
  - ⚡ Server-side rendering
  - 🌐 RESTful API endpoints
  - 🗂️ State management with Redux
  - 🔑 Authentication with NextAuth.js

## 🛠️ Tech Stack

- **Frontend**
  - ⚛️ [Next.js](https://nextjs.org/)
  - 🖼️ [React](https://reactjs.org/)
  - 💅 [Styling](https://tailwindcss.com/)
  - 📦 [shadcnui](https://ui.shadcn.com/)


- **Database**
  - 🍃 [MongoDB](https://www.mongodb.com/)
  - 🌀 [Prisma](https://www.prisma.io/)

- **State Management**
  - 🛠️ [Redux Toolkit](https://redux-toolkit.js.org/)

- **Authentication**
  - 🔒 [Clerk](https://clerk.org/)

## 🚀 Installation

To get started with this project, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/haiderali-43/nextjs.ecommerce-app.git
   cd nextjs.ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following:
   ```env
   DATABASE_URL="your-database-url"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📂 Directory Structure

```
nextjs-ecommerce-app/
├── store/
│   ├── /
│   ├── /
├── admin/
```

## 📋 Usage

### Storefront

- **Home Page**: Displays a list of products.
- **Product Details**: Provides detailed information about a product and allows users to add it to their cart.
- **Cart**: Shows products added to the cart and allows users to proceed to checkout.

### Admin Panel

- **Dashboard**: Overview of the store's performance.
- **Manage Products**: Add, edit, or delete products.
- **Manage Orders**: View and manage customer orders.

### 🔒 Authentication

Authentication is handled by Clerk.com. Admin routes are protected and require users to sign in with appropriate credentials.


## 🌐 Deployment

To deploy this project, follow these steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

For more details on deploying a Next.js app, refer to the [official documentation](https://nextjs.org/docs/deployment).

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards and passes all tests.



Feel free to adjust this template to better fit the specifics of your project and any additional information you want to include.