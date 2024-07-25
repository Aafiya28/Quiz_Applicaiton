const {v4: uuid} = require(uuid);

const quize = {
    "data": [
        //1st Quiz Card --> will have the id, title, description, category, quiz.
        {
            id: uuid(),
            category: "HTML",
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
        }
    ]
}