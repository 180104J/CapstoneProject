export class User {
    name: string;
    mobile: number;
    email: string;
    education: string;
    image: string;
    id: string;

    constructor(name: string, mobile: number, email: string, education: string, image: string, id?:string) {
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.education= education;
        this.image = image;
        this.id = id;
    }
   }