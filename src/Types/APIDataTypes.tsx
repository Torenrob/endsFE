export interface BankAccountAPIData {
	id: number;
	title: string;
	accountType: string;
	repeatGroups: RepeatGroupInBankAccountAPIData[];
	transactions: TransactionAPIData[];
}

export interface TransactionBankAccountData {
	id: number;
	title: string;
}

export interface TransactionAPIData {
	id: number;
	title: string | null;
	transactionType: "Debit" | "Credit";
	amount: number;
	date: string;
	time: string | null;
	category: string;
	description: string | null;
	createdOn: string;
	bankAccount: TransactionBankAccountData;
	repeatGroupId: number | null;
}

export interface PostTransactionAPIData {
	title: string | null;
	transactionType: 0 | 1;
	amount: number;
	date: string;
	category: string;
	description: string | null;
	bankAccountId: number;
}

export interface RepeatGroupInBankAccountAPIData {
	id: number;
}
