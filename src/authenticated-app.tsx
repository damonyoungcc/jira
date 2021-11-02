import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectListScreen />
      <button onClick={logout}>登出</button>
    </div>
  );
};
