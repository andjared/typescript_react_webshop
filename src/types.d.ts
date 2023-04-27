interface IProduct {
	id: number;
	title: string;
	info: string;
	description: string;
	price: string;
	img: string;
}

interface IComments {
	id?: number;
	title: string;
	message: string;
	user: string;
	rating: number;
}
