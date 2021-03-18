export type OptineType<T> = T | undefined;
export type ResultType<T, E> = T | E;

export class Optine<T> {
    private some: T;
    public None = undefined;
    
    public Some(some: T): T {
        this.some = some;
        return some;
    }
    public isSome(v: T): boolean {
        return v === this.some
    }
}

export class Result<T, E> {
    private ok: T;
    private err: E;
    
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
