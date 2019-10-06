export class question {
  public Id: number;
  public Text: String;
  public Marks: number;
  public AnswerId: number;
  public Answers: any;

  constructor(id: number, text: String, marks: number, answerId: number, answers: any) {
    this.Id = id;
    this.Text = text;
    this.Marks = marks;
    this.AnswerId = answerId;
    this.Answers = answers
  }
}