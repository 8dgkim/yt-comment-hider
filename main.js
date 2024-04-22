// main.js

// Function to append the toggle button
function appendToggleButton() {
    var actionsDiv = document.querySelector('div#actions');

    if (actionsDiv) {
        var button = document.createElement('button');
        button.textContent = 'Comments?';
        button.addEventListener('click', toggleCommentSection);
        actionsDiv.appendChild(button);

        // button style
        button.style.backgroundColor = '#272727';
        button.style.color = '#EFEFEF';
        button.style.fontWeight = 'bold';
        button.style.border = 'none';
        button.style.borderRadius = '18px';
        button.style.padding = '8px 16px';
        button.style.marginLeft = '8px';
        button.style.cursor = 'pointer';
        button.style.height = '36px';

        // Hover effect
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#3F3F3F';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#272727'; 
        });

        // Active effect
        button.addEventListener('mousedown', function() {
            button.style.backgroundColor = '#535353'; 
        });

        button.addEventListener('mouseup', function() {
            button.style.backgroundColor = '#272727'; 
        });
    }
}

// Function to toggle the visibility of the comment section
function toggleCommentSection() {
    var commentSection = document.querySelector('ytd-comments');

    if (commentSection) {
        if (commentSection.style.display === 'none') {
            commentSection.style.display = 'block';
        } else {
            commentSection.style.display = 'none';
        }
    }
}

// Callback function for MutationObserver
function mutationCallback(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if div#actions has been added
            if (document.querySelector('div#actions')) {
                // If div#actions is available, stop observing and append the toggle button
                observer.disconnect();
                appendToggleButton();
                break;
            }
        }
    }
}

// Create a MutationObserver to observe changes in the DOM
const observer = new MutationObserver(mutationCallback);

// Start observing the document for changes in the subtree
observer.observe(document, { subtree: true, childList: true });
