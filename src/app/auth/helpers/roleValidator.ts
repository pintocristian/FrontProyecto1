import { User } from "src/app/shared/navbar/models/user.interface";

export class RoleValidator{
    isEstudiante(user:User):boolean{
        return user.role === 'Estudiante';
    }
}