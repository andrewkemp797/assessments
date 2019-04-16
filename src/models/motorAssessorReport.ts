import { VehicleCondition } from './vehicleCondition';

export class MotorAssessorReport {
    public Id: number;
    public Insurance: string;
    public Client: string;
    public ClaimNo: string;
    public Vehicle: string;
    public DateInspected: Date;
    public EngineNo: string;
    public ChassisNo: string;
    public RegistrationNo: string;
    public IsRetired: boolean;

    public VehicleCondition_Id: string;
    public VehicleCondition: VehicleCondition;
}