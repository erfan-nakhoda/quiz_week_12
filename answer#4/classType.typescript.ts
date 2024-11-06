type TproductData = {
    name : string,
    password : string,
    age : number
}

type TproductDataCreate = Pick<TproductData, "age">;
type TproductDataUpdate = Partial<TproductData>;

interface Tclass {
    create(productData : TproductDataCreate) : void,
    delete(id:number): void,
    read() : Array<object>,
    update(id : number, productDto : TproductDataUpdate) : void
}

class Product implements Tclass {
    create(productData: TproductDataCreate): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
    read(): Array<object> {
        throw new Error("Method not implemented.");
    }
    update(id: number, productDto: TproductDataUpdate): void {
        throw new Error("Method not implemented.");
    }
}