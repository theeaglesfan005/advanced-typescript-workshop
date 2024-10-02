// TODO

interface Dog {
    id: number;
    barks: boolean;
}

interface Cat {
    id: number;
    meows: boolean;
}

type Requests = {
    getOne: (id: number) => Promise<{ id: number; barks: boolean }>;
    getAll: () => Promise<Array<{ id: number; barks: boolean }>>;
    create: (partialEntity: { barks: boolean }) => Promise<{ barks: boolean }>;
    update: (id: number, updated: { barks?: boolean }) => Promise<{ barks: boolean }>;
    delete: (id: number) => Promise<void>;
};

type Requests2<T extends { id: unknown }> = {
    getOne: (id: T["id"]) => Promise<T>;
    getAll: () => Promise<Array<T>>;
    create: (partialEntity: Omit<T, "id">) => Promise<T>;
    update: (id: T["id"], updated: Omit<T, "id">) => Promise<T>;
    delete: (id: T["id"]) => Promise<void>;
};

const thing = {} as Requests2<Dog>;
thing.getOne(8);
thing.create({ barks: true });
