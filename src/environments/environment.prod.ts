export const environment = {
  production: true,
  endPoints: {
    assessment: {
      // base: "https://gaassessingassessment-fa.azurewebsites.net/api/",
      // addAssessment() { return this.base + "assessment/add?code=S5IKklFxY9/QNw1vUeQCElokwZPzPLZBP/diJDhd3nVjw1JieNRWGw=="},
      // listAll() { return this.base + "assessment/all?code=TX6qJeiVyhXKhl8OPBvHKSVqOba9A1VEW6yhPesmkyBYBKutWdV16A==" },
      // assessmentById(assessmentId: number) { return this.base + `assessment/id/${assessmentId}?code=oPiffqR4PUmAJ9VndaoXnbua12W9iriaF/YjkyiQSj8FxjLFlRPG0w==`; }
      base: "http://localhost:7071/api/",
      addAssessment() { return this.base + "assessment/add"},
      listAll() { return this.base + "assessment/all" },
      assessmentById(assessmentId: number) { return this.base + `assessment/id/${assessmentId}`; }
    }
  }
};
