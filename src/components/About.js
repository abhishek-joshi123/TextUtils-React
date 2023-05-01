

export default function About(props) {
    let myStyle = {
        color: props.Mode === 'dark'?'white':'#293131',
        backgroundColor: props.Mode === 'dark'?'#293131':'white'
    }
 
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Get to know Text Utility - Free Online Text Formatter</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
            Text Utility is a Free Online Word Counter and character counter tool which can manipulate your text the way you want. Free tool to change text case, change Uppercase to lowercase, lowercase to uppercase, remove extra space for Free. You can copy your manipulated text and use it anywhere.<br/>
            Text Utility is not create to replace any word processor, but the formatting tools available here can help speed up some jobs which might otherwise be long, repetitive and time consuming. Text Utility can also tells you how many words and characters are in your text in no Time.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>What is Text Utility?</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
            Text Utility is a collection of useful text manipulating tools. All text tools are just simple, free and easy to use. A utility created to help the users play around with the text formatting, the way they need.  
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
                This word counter software works in my web browsers such as chrome, firefox, edge, brave, internet explorer, safari, opera. It suits to count characters int facebook, blog, books excel document, essays, etc.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <strong>What are the tools available in Text Utility?</strong>
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
               <strong><li>Word and character counter</li></strong>
                <p className="mx-4">Word Counter is a completely free online tool in Text Utility Web App which helps you quickly count the number of words, characters in a paragraph. You need to count the word count of a piece of text, or you are writing a topic with a limited number of words...
                Don't worry, Text Utility word counter will help you.</p>
               <strong><li>Text case changer - Normal to lowercase, lowercase to uppercase, uppercase to lowercase</li></strong>
               <p className="mx-4">Using this tool you can change the case of the entered text in just one link, as per your requirement.</p>
               <strong><li>Remove extra white spaces</li></strong>
               <p className="mx-4">Remove extra space tool of Text Utility can help you get rid of any extra white spaces between the words in the piece of text rr long paragraphs in just one click.</p>
               <strong><li>Copy the manipulated text</li></strong>
                <p className="mx-4">Once you are done with formatting of your text, with just one click you can copy the text. And, your text is ready to be used in no time.</p>
            </div>
            </div>
        </div>
        </div>  
        <div className="container my-3">
        </div>
    </div>
  )
}
