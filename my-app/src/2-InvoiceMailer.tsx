import { useState } from "react";

type FinalInvoice = {
	type: "final";
};

type DraftInvoice = {
	type: "draft";
};

type Invoice = FinalInvoice | DraftInvoice;

const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
    return invoice.type === "final";
};

const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
    return invoice.type === "draft";
};

const sendEmail = (invoice: FinalInvoice) => {};

export const InvoiceMailer = () => {
	const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(
		null
	);

	return (
		<div>
			{selectedInvoice && isFinalInvoice(selectedInvoice) && (
				<button onClick={() => sendEmail(selectedInvoice)}> {/* selectedInvoice is FinalInvoice according to the guard */}
					Send Email
				</button>
			)}
		</div>
	);
};
