import SideNav from '@/app/ui/dashboard/sidenav';
export default function Layout({ children }: { children: React.ReactNode })
//  { children: React.ReactNode }: This part is TypeScript type annotation. It specifies the shape and types of the props that the Layout component expects.
{
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      {/* here, children is everything inside the dashboard folder, i think */}
    </div>
  );
}