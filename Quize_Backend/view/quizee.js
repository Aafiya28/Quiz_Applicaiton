const {v4: uuid} = require(uuid);

const quize = {
    "data": [
        //1st Quiz Card --> will have the id, title, description, category, quiz.
        {
            id: uuid(),
            category: "HTML MCQ",
            title:"HTML MCQ",
            description: 'lorem ipsum',
            //Question and Option
            quiz: [
                {
                    id: uuid(),
                    question: "What is the correct syntax to write an HTML comment?",
                    options: [
                        { id: uuid(), option: "<!--Comment-->", isCorrect: true},
                        { id: uuid(), option: "// Comment", isCorrect: false},
                        { id: uuid(), option: "# Comment", isCorrect: false},
                        { id: uuid(), option: "/*Comment*/", isCorrect: false}
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the function of the HTML style attribute?",
                    options: [
                        {id: uuid(), option:"Is is used uniquely identify some specific styles of some element", isCorrect:false},
                        {id: uuid(), option:"It is used to add styles to a HTML Element", isCorrect:true},
                        {id: uuid(), option:"Both A and B", isCorrect:false},
                        {id: uuid(), option:"None of above", isCorrect:false}
                    ]
                },
                {
                    id: uuid(),
                    question:"What is the speciality about the <small> and <big> tags in HTML?",
                    options: [
                        {id:uuid(), option:"They work on anything", isCorrect:false},
                        {id:uuid(), option:"They can be used for text only", isCorrect:false},
                        {id:uuid(), option:"They can be repeated", isCorrect:true},
                        {id:uuid(), option:"None of the above", isCorrect:false},
                    ]
                }
            ]
        },
        //2nd Quiz Card
        {
            id:uuid(),
            category: "CSS MCQ",
            title: "CSS MCQ",
            description: 'lorem ipsum',
            //Question and Options
            quiz: [
                {
                    id: uuid(),
                    question:"The full form of CSS",
                    options: [
                        {id:uuid(), option:"Coloured Special Sheet", isCorrect:false},
                        {id:uuid(), option:"Color and Style Sheet", isCorrect:false},
                        {id:uuid(), option:"Cascading Style Sheet", isCorrect:true},
                        {id:uuid(), option:"None of above", isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"How can we change the text color of an element",
                    options: [
                        {id:uuid(), option:"background-color", isCorrect:false},
                        {id:uuid(), option:"color", isCorrect:true},
                        {id:uuid(), option:"Both A and B", isCorrect:false},
                        {id:uuid(), option:"None of above", isCorrect:false},
                    ]
                },
                {
                    id:uuid(),
                    question:"In how many ways CSS can be written as",
                    options: [
                        {id:uuid(), option:"1", isCorrect:false},
                        {id:uuid(), option:"2", isCorrect:false},
                        {id:uuid(), option:"3", isCorrect:true},
                        {id:uuid(), option:"4", isCorrect:false},
                    ]
                }
            ]
        }
    ]
}

module_exports = quize;