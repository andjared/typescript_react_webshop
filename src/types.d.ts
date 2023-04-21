interface Product {
	id: number;
	title: string;
	info: string;
	description: string;
	price: string;
	img: string;
}

interface Comments {
	id?: number;
	title: string;
	message: string;
	user: string;
	rating: number;
}
