export type Routes = {
	authRoute: string;
	fallbackRoute: string;
}

export type Options = Partial<Routes> & { verifyTokenUrl: string; };
