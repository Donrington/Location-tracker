import DashboardNav from "./DashboardNav";

const UserProfile = () => {
  return (
    <div>
      <DashboardNav />

      <div class="container profile-container mt-5">
        <h2 class="profile-heading">User Profile</h2>
        <form id="userProfileForm">
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <label for="profilePicture" class="form-label">
              Profile Picture
            </label>
            <input class="form-control" type="file" id="profilePicture" />
          </div>
          <button type="submit" class="btn btn-update">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
