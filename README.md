# IntelliMail

IntelliMail is an AI-powered email management system designed to enhance the user experience by automating email categorization, reply suggestions, and workflow management. The project leverages modern web technologies like **Next.js**, **React**, **TypeScript**, and **PostgreSQL**, integrated with **OpenAI API** for intelligent email handling.

## Features

- **AI-Powered Email Categorization**: Automatically categorize emails based on content using **OpenAI API** to help users organize their inbox more efficiently.
- **Smart Reply Suggestions**: Generate contextually relevant email replies using AI, saving time for users.
- **Subscription-Based Access**: Implemented a subscription system using **Stripe** for premium features.
- **Secure Data Storage**: Utilizes **PostgreSQL** for efficient and secure data storage, with **Prisma ORM** for simplified database access.
- **Responsive Design**: Built with **Tailwind CSS** for a responsive and user-friendly UI.
  
## Technologies

- **Frontend**: 
  - **Next.js**: A React framework for building the user interface.
  - **React**: A JavaScript library for building user interfaces.
  - **TypeScript**: A statically typed superset of JavaScript.
  - **Tailwind CSS**: A utility-first CSS framework for responsive design.
  
- **Backend**: 
  - **Node.js**: JavaScript runtime for building backend services.
  - **Prisma ORM**: An open-source ORM to query databases.
  - **PostgreSQL**: A powerful open-source relational database for storing data securely.
  
- **Third-party Integrations**: 
  - **OpenAI API**: Used for email categorization and generating smart reply suggestions.
  - **Stripe**: For implementing subscription and payment processing.

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **PostgreSQL** (or any SQL database setup with Prisma)

### Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/Tharanitharan-M/IntelliMail.git
    ```

2. Install dependencies:
    ```bash
    cd IntelliMail
    npm install
    ```

3. Set up the database:
    - Create a `.env` file in the root directory.
    - Add your PostgreSQL connection string and OpenAI API key:
    ```env
    DATABASE_URL=postgresql://username:password@localhost:5432/IntelliMail
    OPENAI_API_KEY=your-openai-api-key
    STRIPE_SECRET_KEY=your-stripe-secret-key
    ```

4. Run database migrations with Prisma:
    ```bash
    npx prisma migrate dev
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **Email Categorization**: Users can upload emails and let the AI automatically categorize them based on the content.
- **Smart Reply**: Users can select an email, and the AI will generate a reply suggestion.
- **Subscription**: Users can sign up and access premium features via Stripe.

## Contributing

Feel free to fork the repository, create issues, and submit pull requests. If you want to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Next.js** and **React** for providing the structure and UI components.
- **OpenAI** for making it easy to integrate AI into applications.
- **Stripe** for secure and easy payment integration.
- **Prisma** for simplifying database access and management.

