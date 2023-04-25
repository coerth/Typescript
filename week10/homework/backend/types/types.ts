
export type Address = {
    _id?: string,
    street: string
}

export type Person = {
    _id?: string,
    name: string,
    age?: number,
    address?: Address
    addressId?: string
}

export type Mechanic = {
    _id?: string,
    name: string,
    title: string,
    email: string
    experience: number,
    people: Person[]
}

export type Context = {
    people: Person[];
    addresses: Address[];
};
export type Args = {
    id: string;
    input: PersonInput | Address | Mechanic;
};

export type PersonInput = {
    name: string,
    age?: number,
    address?: string
}