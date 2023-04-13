
export type Address = {
    _id: string,
    street: string
}

export type Person = {
    _id: string,
    name: string,
    age: number,
    address: Address
}

export type Context = {
    people: Person[];
    addresses: Address[];
};
export type Args = {
    id: string;
    input: Person | Address;
};