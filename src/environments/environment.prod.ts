export const environment = {
  production: true,
  endPoints: {
    assessment: {
      base: "http://localhost:7071/api/",
      addAssessment() { return this.base + "assessment/add"},
      listAll() { return this.base + "assessment/all" },
      assessmentById(assessmentId: number) { return this.base + `assessment/id/${assessmentId}`; }
    }
  }
};
