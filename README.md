# Personal Portfolio

This project is a personal portfolio website developed using Next.js to showcase my work and skills as a software 
engineer. The site is designed with a clean, responsive interface to highlight projects, technical expertise, 
and professional experiences effectively. By incorporating modern tools such as Tailwind CSS for styling, Framer Motion 
for animations, and Vercel for deployment, the portfolio provides an engaging and interactive user experience.

This README will guide you through the key technologies used, setup instructions, and insights into the design choices 
made to create a seamless presentation of my work.

---

## 🖥️ Tech Stack

[![Stack](https://skillicons.dev/icons?i=ts,next,tailwind,vercel)](https://skillicons.dev)

---

## ▶️ Getting Started

1. **Create a `.env.local` file**:
    - Add a `RESEND_API_KEY=` with your Resend API key.

2. **Run the application**:
    - To run the application in the development environment, use the following command:
      `pnpm dev`

After completing these steps, the application should be fully operational

## Tools and Services for Development

### User Interface

The user interface was built using the **Shadcn/UI** component library and **Tailwind CSS** as the primary styling framework. To enhance the user experience, **Framer Motion** is used for animations and **Sonner** for notifications, ensuring a dynamic and interactive design.

- **Shadcn/UI**: A component library for building user interfaces with a clean, accessible, and customizable design system, built specifically for React.
   - [Documentation](https://ui.shadcn.com/docs)

- **Tailwind CSS**: A utility-first CSS framework for creating custom designs without having to leave your HTML, providing flexibility and rapid development.
   - [Documentation](https://tailwindcss.com/docs)

- **Framer Motion**: A library for animations in React, offering smooth transitions and complex animation sequences.
   - [Documentation](https://www.framer.com/motion/)

- **Sonner**: A lightweight notification library for React that provides simple, customizable toast notifications.
   - [Documentation](https://sonner.emilkowal.ski/)


### Forms and Validation

For form management and validation, this project uses React Hook Form alongside Zod for schema-based validation,
providing a robust and reliable structure for handling user inputs.

- **React Hook Form**: [Documentation](https://react-hook-form.com/)
- **Zod**: [Documentation](https://zod.dev/)

### Email Handling and API Integration

For email handling and API integration, we have integrated **React Email** and **Resend** to streamline email sending and management.

- **React Email**: A library for building and sending responsive HTML emails in React.
   - [Documentation](https://react.email/)

- **Resend**: An email delivery service that allows you to send transactional and marketing emails with ease, integrated into our application for efficient email handling.
   - [Documentation](https://resend.com/docs)

### Internationalization with `next-intl`

For handling multiple languages and providing a seamless internationalization (i18n) experience, I implemented **next-intl**. This library allows easy management of translations, date/time formatting, and other locale-specific content across the application.

- **next-intl**: A library for internationalization in Next.js applications, providing a simple way to manage translations and locale-specific content.
   - [Documentation](https://next-intl-docs.vercel.app/)

### Deployment on Vercel

The application is deployed on **Vercel**, providing fast and scalable hosting for both frontend and backend. Vercel’s seamless integration with Next.js ensures optimal performance, automatic scaling, and instant rollbacks.

- **Vercel**: A platform for frontend frameworks and static sites, offering global edge network deployment and continuous integration.
   - [Documentation](https://vercel.com/docs)

---

## 📄 License

This software is available under the following licenses:

- [MIT](https://rem.mit-license.org)

Feel free to fork the repository, modify the code, and use it for your own projects. Contributions are welcome to help 
improve the project and expand its capabilities.
