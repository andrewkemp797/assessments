import { MotorAssessorReport } from './motorAssessorReport';

export class VehicleCondition {
    public Id: number;
    public Odometer: number;
    public Steering: string;
    public Footbrake: string;
    public Handbrake: string;
    public Bodywork: string;
    public Windscreen: string;
    public Chassis: string;
    public Interior: string;
    public PaintCondition: string;
    public PaintColour: string;

    public AirConditioner: string;
    public MagWheels: string;
    public Sunroof: string;
    public Spotlights: string;
    public Towbar: string;
    public RunningBoards: string;
    public Radio: string;
    public Speakers: string;
    public CentralLocking: string;
    public Immobiliser: string;
    public BullBar: string;
    public BootSpoiler: string;

    public GeneralCondition: string;
    public MissingItems: string;
    public OldDamage: string;
    public TyreMake: string;
    public TyreThreadLF: number;
    public TyreThreadRF: number;
    public TyreThreadLR: number;
    public TyreThreadRR: number;
    public TyreThreadSpare: number;

    public VehicleInspectedAt: string;
    public QuotesObtainedFrom: string;

    public Remarks: string;
    public IsRetired: boolean;

    public MotorAssessorReport: MotorAssessorReport;
}