export type OptineType<T> = T | undefined;
export type ResultType<T, E> = T | E;

export class Optine<T> {
    some: T;
    public Some(some: T): T {
        this.some = some;
        return some;
    }
    public None = undefined;
    public isSome(v: T): boolean {
        return v === this.some
    }
}

export class Result<T, E> {
    ok: T;
    err: E;
    public Ok(ok: T): T {
        this.ok = ok;
        return ok
    };
    public Err(err: E): E {
        this.err = err;
        return err
    };
    public isOk(v: T): boolean {
        return v === this.ok
    }
    public isErr(v: E): boolean {
        return v === this.err
    }
}
