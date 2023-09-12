
export class Filter{
    Field:string;
    Operator: string;
    Value:string;
    Logic:string;
    Filters: Iterable<Filter>;
}
