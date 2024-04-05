export default interface byDefault<T> {
	getList(): Promise<T[]>;
	insert(record: T): Promise<any>;
}
