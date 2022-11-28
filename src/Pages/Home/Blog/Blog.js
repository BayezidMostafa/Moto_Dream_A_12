import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function Blog() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="min-h-[71vh] md:w-2/3 flex flex-col mx-auto justify-center">
            <Fragment>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        What are the different ways to manage a state in a React application?
                    </AccordionHeader>
                    <AccordionBody>
                        <span className="text-base font-semibold">There are four main types of state manage in React apps</span>
                        <br />
                        <span className="text-base">They are: 1. Local state, 2. Global state, 3. Server state, 4. URL state</span>
                        <br />
                        <span className="text-base">Local state : Local state is data we manage in one or another component.</span>
                        <br />
                        <span className="text-base">Global state : Global state is data we manage across multiple components.</span>
                        <br />
                        <span className="text-base">Server state : Data that comes from an external server that must be integrated with our UI state.</span>
                        <br />
                        <span className="text-base">URL state : Data that exists on our URLs, including the pathname and query parameters.</span>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How does prototypical inheritance work?
                    </AccordionHeader>
                    <AccordionBody>
                        <span className="text-base">
                            In JavaScript, an object can inherit the properties of another object. The object from where the properties are inherited is called the prototype.
                            Prototypal Inheritance is when an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                        </span>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        What is a unit test? Why should we write unit tests?
                    </AccordionHeader>
                    <AccordionBody>
                        <span className="text-base">Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be a line of code, a method, or a class. </span> <br />
                        <span className="text-base">They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex</span>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        React vs. Angular vs. Vue?
                    </AccordionHeader>
                    <AccordionBody>
                        <span className="text-base">
                            <span className="text-xl font-bold">React:</span> React can be used as a UI library to render elements, without enforcing a specific project structure, and that's why it's not strictly a framework. React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes. Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user. React is one of the most popular JavaScript projects with 160k stars on GitHub. It's developed and maintained by Facebook, and it's used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith's usage statistics. Many front-end applications rely on global state management to store information, such as who is logged in and other user settings.
                        </span>
                        <br />
                        <span className="text-base">
                            <span className="font-bold text-xl"> Vue:</span> The Vue.js core library focuses on the View layer only. It's called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you'll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View. Vue's templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported. Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You. It's a very strong, independent project in the open-source community and is used by over 1 million websites, according to BuiltWith. Even though Redux can be used in Vue, there are no official bindings. But that should not worry you because Vuex is the official state management library made specifically for Vue applications. Aside from integrating very well with Vue, it's easy to debug using Vue's developer tools.
                        </span>
                        <br />
                        <span className="text-base">
                            <span className="font-bold text-xl">Angular:</span> AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, theres no strict association with MV*-patterns as it is also component-based. Angular is developed by Google, but surprisingly it's not used in some of their flagship products such as Search or Youtube. It's often used in enterprise projects, and it powers over 97,000 websites based on BuiltWith's data. For state management in Angular, you can use the NgRx project. It has been inspired by Redux, but it’s specifically created for Angular.
                        </span>
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div >
    );
}