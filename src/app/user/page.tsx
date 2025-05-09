// app/dashboard/page.tsx
import { getServerUser } from "@/lib/getServerUser";

export default async function DashboardPage() {
  const user = await getServerUser();

  if (!user) {
    return <p>Please log in to access your dashboard.</p>;
  }

  return (
    <div className="bg-red-500 w-full">
      <h1>Welcome {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Image: {user.image}</p>
      <p>Address: </p>
      <p>Any kind of data you want from the user:  {JSON.stringify(user)}</p>
    </div>
  );
}
