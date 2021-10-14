class HelloWorld {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return "Hello " + this.name;
    }
}

export default HelloWorld;
