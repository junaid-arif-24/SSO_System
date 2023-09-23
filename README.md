
<h1>Single Sign-On (SSO) System</h1>
<p>Welcome to the Single Sign-On (SSO) System project! This project demonstrates a secure sign-in and sign-up
        system with social login options (GitHub and Google) using JWT authentication. It also includes a progress bar
        and animations in the dashboard.</p>
<h2>Table of Contents</h2>
    <ul>
        <li><a href="#architecture">Architecture</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>
<h2 id="architecture">Architecture</h2>
<h3>2D Architecture Diagram</h3>
<img src="https://i.ibb.co/bFFMRZb/Screenshot-from-2023-09-23-12-28-05.png" alt="2D Architecture Diagram">
<p>
  <strong>Frontend (Client):</strong>
</p>
<ul>
 <li>User Interface (UI): Responsible for rendering the user interface and handling user interactions.</li>
 <li>Social Login (GitHub, Google): Provides options for users to log in using social authentication providers.
 </li>
</ul>

<p>
 <strong>Backend (Server):</strong>
</p>
    <ul>
        <li>API Endpoints: Offers various API endpoints for frontend communication, including user authentication and
            data retrieval.</li>
        <li>Authentication (Passport.js): Implements user authentication strategies, including OAuth for social logins.
        </li>
        <li>Database (MongoDB, Redis): Utilizes MongoDB for data storage and Redis for session management.</li>
    </ul>

<h2 id="#features">Features</h2>
    <ul>
        <li>Secure user authentication using JWT tokens.</li>
        <li>Social login options with GitHub and Google.</li>
        <li>Progress bar and animations for a smooth user experience.</li>
        <li>Flexible architecture that can adapt to various screen sizes.</li>
    </ul>

<h2 id="#technologies">Technologies</h2>
<p>
        <strong>Frontend:</strong>
</p>
<ul>
        <li>React</li>
        <li>Material-UI</li>
        <li>React Router DOM</li>
</ul>

<p>
        <strong>Backend:</strong>
</p>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Passport.js</li>
    </ul>

<p>
        <strong>Databases:</strong>
</p>
    <ul>
        <li>MongoDB</li>
        <li>Redis</li>
    </ul>

<h2 id="#getting-started">Getting Started</h2>
    <ol>
        <li>Clone the repository:
            <pre>git clone https://github.com/yourusername/your-sso-project.git</pre>
        </li>
        <li>Install dependencies for both the frontend and backend:
<pre>cd your-sso-project/frontend<br>npm install</pre>
<pre>cd your-sso-project/backend<br>npm install</pre>
        </li>
        <li>Set up environment variables by creating a <code>.env</code> file in the backend directory and adding the
            required configurations.</li>
        <li>Start the frontend and backend servers:
            <pre># In the frontend directory
npm start</pre>
<pre># In the backend directory
npm start</pre>
        </li>
        <li>Access the application at <a href="http://localhost:3000">http://localhost:3000</a> in your web browser.
        </li>
    </ol>

<h2 id="#usage">Usage</h2>
    <ul>
        <li>Sign in or sign up using email and password.</li>
        <li>Alternatively, use the provided social login options with GitHub or Google.</li>
        <li>Explore the dashboard with animations and a progress bar.</li>
        <li>Customize and expand the project as needed for your specific use case.</li>
    </ul>

<h2 id="#contributing">Contributing</h2>
    <p>Contributions are welcome! Feel free to open issues or pull requests for improvements, bug fixes, or new
        features.</p>
