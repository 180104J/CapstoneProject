export class Course {
    name: string;
    description: string;
    image: string;
    id: string;
    icon: string;
    constructor(name: string, description: string, image: string, id?:string, icon?: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.id = id;
        this.icon = icon;
    }
   }


   
