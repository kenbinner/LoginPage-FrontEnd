export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;


    // constructor(id: number, name: string, email: string, password: string){
    //     this.id = id;
    //     this.name = name;
    //     this.email = email;
    //     this.password = password;
    // }


    getId(): number {
        return this.id;
      }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
      }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
      }

    setEmail(email: string): void {
        this.email = email;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

}
