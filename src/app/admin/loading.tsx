import { Loader2 } from "lucide-react";

export default function AdminLoading() {
	return (
		<div className="flex justify-center">
			{/* this loader comes with shadcn */}
			<Loader2 className="size-24 animate-spin" />
		</div>
	);
}
