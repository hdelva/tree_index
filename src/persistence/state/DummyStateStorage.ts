import StateStorage from "./StateStorage";

export default class DummyStageStorage extends StateStorage {
    protected data: object;

    constructor() {
        super();
        this.data = {};
    }

    public set(key: string, value: string) {
        this.data[key] = value;
    }

    public get(key: string): Promise<string | undefined> {
        return this.data[key];
    }
}
