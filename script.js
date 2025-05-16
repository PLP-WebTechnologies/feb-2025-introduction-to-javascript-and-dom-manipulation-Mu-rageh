// script.js

// Changing text content dynamically
const changeTextButton = document.getElementById('change-text-btn');
const dynamicTextElement = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', () => {
    dynamicTextElement.textContent = 'The text has been changed dynamically by JavaScript!';
});

// Modifying CSS styles via JavaScript
const styleButton = document.getElementById('style-btn');

styleButton.addEventListener('click', () => {
    dynamicTextElement.style.color = 'green';
    dynamicTextElement.style.fontWeight = 'bold';
    dynamicTextElement.style.backgroundColor = '#e0ffe0';
    dynamicTextElement.style.padding = '10px';
    dynamicTextElement.style.borderRadius = '5px';
});

// Adding or removing an element
const addElementButton = document.getElementById('add-element-btn');
const removeElementButton = document.getElementById('remove-element-btn');
const contentArea = document.getElementById('content-area');

addElementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'A new paragraph added dynamically!';
    contentArea.appendChild(newParagraph);
});

removeElementButton.addEventListener('click', () => {
    const paragraphs = contentArea.querySelectorAll('p');
    if (paragraphs.length > 1) { // Keep the initial paragraph
        contentArea.removeChild(paragraphs[paragraphs.length - 1]);
    } else {
        alert('Cannot remove the initial paragraph.');
    }
});