import { VehicleCondition } from './vehicleCondition';

export class MotorAssessorReport {
    public Id: number = 0;
    public Insurance: string = "";
    public Client: string = "";
    public ClaimNo: string = "";
    public Vehicle: string = "";
    public DateInspected: Date = new Date();
    public EngineNo: string = "";
    public ChassisNo: string = "";
    public RegistrationNo: string = "";
    public IsRetired: boolean = false;

    public VehicleCondition: VehicleCondition;
}