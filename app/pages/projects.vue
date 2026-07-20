<template>
  <section class="projects">
    <h1>Projects</h1>

    <div class="project-card">
      <h2>Job Board</h2>
      <p>
        Features CRUD functionality with an apply button, along with approve,
        reject, and shortlist options. It also includes role-based auth
        (company/applicant/admin), duplicate-prevention on applications, search,
        and pagination.
      </p>
      <p><strong>Tech:</strong> Node.js, Express, EJS, MySQL</p>
      <ul>
        <li>Role-based auth(company/applicant/admin)</li>
        <li>CRUD functionality</li>
        <li>Shortlisted, Rejected, Applied</li>
      </ul>
      <a href="https://github.com/MeenakshiShekhawat/job-board" target="_blank"
        >View on GitHub</a
      >
    </div>

    <div class="project-card">
      <h2>Expense Tracker</h2>
      <p>
        A simple expense tracker app with full CRUD functionality, built entirely on my own.
      </p>
      <p><strong>Tech:</strong> Node.js, Express, EJS, MySQL</p>
      <ul>
        <li>CRUD Operation</li>
        <li>Pagination and search Filter</li>
      </ul>
      <a
        href="https://github.com/MeenakshiShekhawat/expense-tracker"
        target="_blank"
        >View on GitHub</a
      >
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 60px 32px;
  max-width: 900px;
  margin: 0 auto;
}

.projects h1 {
  font-size: 36px;
  margin-bottom: 32px;
}

.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.project-card h2 {
  font-size: 24px;
  margin-bottom: 12px;
}

.project-card p {
  margin-bottom: 12px;
}

.project-card ul {
  margin: 12px 0 16px 20px;
}

.project-card a {
  font-weight: 600;
}
</style>
