import User from "./user";

class Employee extends User {
    protected admissionDate: number
    protected baseSalary: number

    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      admissionDate: number,
      baseSalary: number  
    ) {
        super(id, email, name, password)
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getAdmissionDate(): number {
        return this.admissionDate
   }

   public getBaseSalary(): number {
    return this.baseSalary
   }

   public calculateTotalSalary(): number {
    return this.baseSalary + 400
   }
}

export default Employee