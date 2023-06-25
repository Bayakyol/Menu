
import Accordion from '../components/Accordion';


function AccordionPage() {

const items = [
  {
    id: "l2k5j",
label: "Can use React on a project?",
content: "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want."
  },

  {
    id: "l2kfjhjh",
    label: "Can use React on a project?",
    content: "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want."
    },
    
  {
    id: "l1kj2fkjgkf",
  label: "Can use React on a project?",
  content: "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want."
   },
        
];


  return <Accordion items={items} />;
}

export default AccordionPage;
