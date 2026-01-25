export default function BackendContributions() {
  return (
      <div>
        <h3 className="text-xl font-semibold mb-2">
          Backend Contributions:
        </h3>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Backend API Development (Go & Fiber):</strong>{" "}
            Designed and developed production-ready RESTful APIs using Go Fiber to
            support authentication, content management, and notification
            workflows.
          </li>

          <li>
            <strong>Database Design & Optimization:</strong>{" "}
            Implemented a relational data model using PostgreSQL and GORM,
            emphasizing data integrity, query efficiency, and maintainability.
          </li>

          <li>
            <strong>Authentication & Security:</strong>{" "}
            Built a JWT-based authentication system, including Google OAuth,
            email verification, and password recovery, following backend security
            best practices.
          </li>

          <li>
            <strong>Asynchronous Processing with Redis:</strong>{" "}
            Utilized Redis as a task queue for background jobs such as email
            notifications, improving API responsiveness and overall system
            performance.
          </li>

          <li>
            <strong>Containerization & Deployment:</strong>{" "}
            Containerized backend services using Docker and deployed the
            application on AWS, ensuring consistent environments across
            development and production.
          </li>
        </ul>
      </div>
  );
}

