"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { addProduct } from "../../_action/Products";

export function ProdcutForm() {
	const [priceInCents, setPriceInCents] = useState<number>();

	return (
		<form className="space-y-8" action={addProduct}>
			<div className="space-y-2">
				<Label htmlFor="name">Name</Label>
				<Input type="text" id="name" name="name" required />
			</div>
			<div className="space-y-2">
				<Label htmlFor="priceInCents">
					Price in Cents(add 00 at end if cents not needed)
				</Label>
				<Input
					type="number"
					id="priceInCents"
					name="priceInCents"
					required
					value={priceInCents}
					onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
				/>
				<div className="text-muted-foreground">
					{/* Now we can add pice even in paise */}
					{formatCurrency((priceInCents || 0) / 100)}
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="description">Description</Label>
				<Textarea id="description" name="description" required />
			</div>
			<div className="space-y-2">
				<Label htmlFor="file">File</Label>
				<Input type="file" id="file" name="file" required />
			</div>
			<div className="space-y-2">
				<Label htmlFor="image">Image</Label>
				<Input type="file" id="image" name="image" required />
			</div>
			<Button type="submit">Save</Button>
		</form>
	);
}
