import { Nav, NavLink } from "@/components/Nav";

// Caching is not allowed as we want the most recent and upto date data for the admin
export const dynamic = "force-dynamic";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Nav>
				<NavLink href="/admin">Dashboard</NavLink>
				<NavLink href="/admin/products">Products</NavLink>
				<NavLink href="/admin/users">Customers</NavLink>
				<NavLink href="/admin/orders">Sales</NavLink>
			</Nav>
			<div className="container my-6">{children}</div>
		</>
	);
}
