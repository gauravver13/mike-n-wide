// app/dashboard/page.tsx
import { getServerUser } from "@/lib/getServerUser";

export default async function DashboardPage() {
  const user = await getServerUser();

  if (!user) {
    return <p>Please log in to access your dashboard.</p>;
  }

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
