export type OptineType<T> = T;
export type ResultType<T, E> = T | E;

export class Optine<T> {
    public Some(some: T): T { return some; }
    public None = undefined;
}

export class Result<T, E> {
    ok: T;
    err: E;
    public Ok(ok: T): T { return ok };
    public Err(err: E): E { return err };
}
