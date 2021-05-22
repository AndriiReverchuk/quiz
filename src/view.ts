import { DataInterface } from "./model";
import { AnswersMainInterface } from "./model";

export class View {
	container: HTMLElement;
	containerQuestions: HTMLElement;
	containerAnswers: HTMLElement;
	constructor() {
		this.container = this.createElement("div", "container");
		this.containerQuestions = this.createElement("div", "container-questions alert alert-success mt-5");
		this.containerAnswers = this.createElement("div", "container-answers");
		document.body.append(this.container);
		this.container.append(this.containerQuestions, this.containerAnswers);
	}
	// renderTastks(arr: any) {
	// 	arr.forEach((data: DataInterface) => {
	// 		this.createTaskContainer(data);
	// 	});
	// }
	renderQuestions(data: DataInterface[]): void {
		const title = this.createElement(
			"h2",
			"question-title",
			`${data[0].title}`,
		);
		const img = this.createElement("img", "question-img");
		img.setAttribute("src", data[0].imageUrl);
		img.setAttribute("alt", `picture`);
		this.containerQuestions.append(title, img);
	}
	renderAnswers(data: AnswersMainInterface): void {
		for (let i = 0; i < data.question1.length; i++) {
			const answersDiv = this.createElement("div", "answer-div card text-white bg-dark-500 mb-3")
			const titleBox = this.createElement(
				"p",
				"answer-title card-text",
				data.question1[i].title,
			);
			const img = this.createElement("img", "answer-img card-img-top");
			img.setAttribute("src", data.question1[i].image);
			img.setAttribute("alt", `picture`);
			answersDiv.append(titleBox, img)
			this.getElement(".container-answers")?.append(answersDiv);
		}
	}
	createElement = (tag: string, cl?: string, text?: string) => {
		const element: HTMLElement = document.createElement(tag);
		if (cl) element.className = cl;
		if (text) element.textContent = text;
		return element;
	};
	getElement = (selector: string) => {
		const element = document.querySelector(selector);
		return element;
	};
}

