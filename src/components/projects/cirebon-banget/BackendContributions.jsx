export default function BackendContributions() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Backend Development:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>API Development with Go and Go Fiber:</strong> Developed
          RESTful APIs using Go Fiber for handling core functionalities such as
          user authentication, content management, and real-time notifications,
          ensuring efficient client-server communication.
        </li>
        <li>
          <strong>Database Management with PostgreSQL and GORM:</strong>{" "}
          Designed and implemented a secure and optimized database structure
          using PostgreSQL and GORM to ensure data integrity and efficient data
          handling.
        </li>
        <li>
          <strong>Authentication & Security:</strong> Implemented a robust
          authentication system using JWT for session management, including
          Google login, email verification, and password recovery.
        </li>
        <li>
          <strong>Task Queue with Redis:</strong> Integrated Redis to manage
          background tasks such as sending email notifications for user
          registration, email verification, and password reset requests. This
          ensured asynchronous processing, improving performance and user
          experience.
        </li>
        <li>
          <strong>Containerization with Docker:</strong> Containerized backend
          services using Docker to maintain consistency across development and
          production environments, enabling easy deployment and scaling of the
          application.
        </li>
      </ul>
    </div>
  );
}
