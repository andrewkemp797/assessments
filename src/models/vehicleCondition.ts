import { MotorAssessorReport } from './motorAssessorReport';

export class VehicleCondition {
    public Id: number = 0;
    public Odometer: number = 0;
    public Steering: string = "";
    public Footbrake: string = "";
    public Handbrake: string = "";
    public Bodywork: string = "";
    public Windscreen: string = "";
    public Chassis: string = "";
    public Interior: string = "";
    public PaintCondition: string = "";
    public PaintColour: string = "";

    public AirConditioner: string = "";
    public MagWheels: string = "";
    public Sunroof: string = "";
    public Spotlights: string = "";
    public Towbar: string = "";
    public RunningBoards: string = "";
    public Radio: string = "";
    public Speakers: string = "";
    public CentralLocking: string = "";
    public Immobiliser: string = "";
    public BullBar: string = "";
    public BootSpoiler: string = "";

    public GeneralCondition: string = "";
    public MissingItems: string = "";
    public OldDamage: string = "";
    public TyreMake: string = "";
    public TyreThreadLF: number = 0;
    public TyreThreadRF: number = 0;
    public TyreThreadLR: number = 0;
    public TyreThreadRR: number = 0;
    public TyreThreadSpare: number = 0;

    public VehicleInspectedAt: string = "";
    public QuotesObtainedFrom: string = "";

    public Remarks: string = "";
    public IsRetired: boolean = false;

    public MotorAssessorReport: MotorAssessorReport;
}