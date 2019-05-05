import { MotorAssessorReport } from './motorAssessorReport';

export class Photo {
    public Id: number;
    public PhotoBase64: string;
    public MotorAssessorReportId: number;

    public MotorAssessorReport: MotorAssessorReport
}